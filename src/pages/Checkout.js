import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";
import {config} from "../utils/axiosConfig";
import { createOrder, emptyCart, resetState } from "../features/user/userSlice";
import { getProducts } from "../features/products/productSlice";
const orderSchema=yup.object({
  firstName:yup.string().required("First Name is Required"),
  lastName:yup.string().required("Last Name is Required"),
  address:yup.string().required("Address Details is Required"),
  state:yup.string().required("State is Required"),
  country:yup.string().required("Country is Required"),
  city:yup.string().required("City is Required"),
  pincode:yup.number().required("Zip Code is Required"),
  other:yup.string().required("Detailed Location is Required"),
})

const Checkout = () => {
  const getTokenFromLocalStorage=localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer")):null;
  const config2={
    headers:{
      Authorization: `Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage.token:""}`
    },
    Accept:"application/json"
  };
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo,setPaymentInfo]=useState({razorpayOrderId:"",razorpayPaymentId:""});
  const [cartProductState,setCartProductState]=useState([]);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState=useSelector((state)=>state.auth);
  useEffect(()=>{
    dispatch(getProducts());
  },[])
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum = sum + Number(cartState[i].quantity * cartState[i].price);
    }
    setTotalPrice(sum);
  }, [cartState]);
  const formik=useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      address:"",
      state:"",
      country:"",
      city:"",
      pincode:"",
      other:"",
    },
    validationSchema:orderSchema,
    onSubmit:async(values)=>{
      await setShippingInfo(values);
      setTimeout(() => {
        checkOutHandler();
      }, 300);
    }
  });
  const  loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script=document.createElement("script")
      script.src=src;
      script.onload=()=>{
        resolve(true);
      }
      script.onerror=()=>{
        resolve(false);
      }
      document.body.appendChild(script)
    })
  }
  useEffect(()=>{
    let items=[];
    for (let index = 0; index < cartState?.length; index++) {
      items.push(
        {
          product:cartState[index].productId._id,
          quantity:cartState[index].quantity,
          color:cartState[index].color._id,
          price:cartState[index].price
        }
      )
    }
    setCartProductState(items);
  },[]);
  const checkOutHandler=async()=>{
    const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if(!res){
      alert("Razorpay SDK failed to Load");
      return;
    }
    const result=await axios.post("http://localhost:5000/api/user/order/checkout",{amount:totalPrice+50},config2)
    if(!result){
      alert("Somthing Went Wrong");
      return;
    }
    const {amount,id:order_id,currency} =result.data.order
    const options = {
      key: process.env.key, // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Developers",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
          };

          const result = await axios.post("http://localhost:5000/api/user/order/paymentVerification", data,config2);
          
          await setPaymentInfo({
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
          });
          dispatch(createOrder(
            {
              totalPrice:totalPrice,
              totalPriceAfterDiscount:totalPrice,
              orderItems:cartProductState,
              paymentInfo:paymentInfo,
              shippingInfo:shippingInfo,
              config2:config2
            }
          ))
          dispatch(emptyCart(config2));
          dispatch(resetState());
      },
      prefill: {
          name: "Developers",
          email: "Developers@example.com",
          contact: "9090909090",
      },
      notes: {
          address: "Developers Corporate Office",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  }
  useEffect(()=>{
    if(authState?.orderedProduct!==null && authState?.orderedProduct?.success===true){
      navigate("/my-orders");
    }
  },[authState])
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-lect-data">
              <h3 className="website-name">Developers</h3>
              <nav
                //   style="--bs-breadcrumb-divider: '>';"
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="total-price text-dark">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="total-price breadcrumb-item active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="total-price breadcrumb-item active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="total-price breadcrumb-item active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Priyanshu Soni (priyanshus20k4@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select 
                    className="form-control form-select" id=""
                    name="country" 
                    onChange={formik.handleChange("country")} 
                    onBlur={formik.handleBlur("country")} 
                    value={formik.values.country}
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="India">
                      India
                    </option>
                  </select>
                  <div className="errors ps-2 my-1">
                    {
                      formik.touched.country && formik.errors.country
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    onChange={formik.handleChange("firstName")} 
                    onBlur={formik.handleBlur("firstName")} 
                    value={formik.values.firstName}
                  />
                  <div className="errors ps-2 my-1">
                    {
                      formik.touched.firstName && formik.errors.firstName
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={formik.handleChange("lastName")} 
                    onBlur={formik.handleBlur("lastName")} 
                    value={formik.values.lastName}
                  />
                  <div className="errors ps-2 my-1">
                    {
                      formik.touched.lastName && formik.errors.lastName
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    onChange={formik.handleChange("address")} 
                    onBlur={formik.handleBlur("address")} 
                    value={formik.values.address}
                  />
                  <div className="errors ps-2 my-1">
                    {
                      formik.touched.address && formik.errors.address
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite, etc"
                    className="form-control"
                    name="other"
                    onChange={formik.handleChange("other")} 
                    onBlur={formik.handleBlur("other")} 
                    value={formik.values.other}
                  />
                  <div className="errors ps-2 my-1">
                    {
                      formik.touched.other && formik.errors.other
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    onChange={formik.handleChange("city")} 
                    onBlur={formik.handleBlur("city")} 
                    value={formik.values.city}
                  />
                  <div className="errors ps-2 my-1">
                    {
                      formik.touched.city && formik.errors.city
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select 
                    className="form-control form-select" 
                    id=""
                    name="state"
                    onChange={formik.handleChange("state")} 
                    onBlur={formik.handleBlur("state")} 
                    value={formik.values.state}
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="Rajasthan">
                      Rajasthan
                    </option>
                  </select>
                  <div className="errors ps-2 my-1">
                    {
                      formik.touched.state && formik.errors.state
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="form-control"
                    name="pincode"
                    onChange={formik.handleChange("pincode")} 
                    onBlur={formik.handleBlur("pincode")} 
                    value={formik.values.pincode}
                  />
                  <div className="errors ps-2 my-1">
                    {
                      formik.touched.pincode && formik.errors.pincode
                    }
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to="/cart"
                      className="d-flex align-items-center text-dark"
                    >
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                    <button className="button" type="submit" >
                       Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div key={index} className="d-flex mb-2 gap-10 align-items-center">
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{
                              top: "-10px",
                              right: "2px",
                              width: "25px",
                              height: "25px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            className="checkout-image"
                            src={item?.productId?.images[0].url}
                            style={{"width":"70px"}}
                            alt="product"
                          />
                        </div>
                        <div>
                          <h5 className="total">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">
                          <ul className="colors ps-0">
                            Color:<li style={{ backgroundColor: item?.color?.title }}></li>
                          </ul>
                          </p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">$ {item?.price * item?.quantity}</h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total ">Subtotal</p>
                <p className="mb-0 total-price">${totalPrice}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 50</p>
              </div>
            </div>
            <div className="d-flex py-4 justify-content-between align-items-center">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ {totalPrice+50}</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;

import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../features/user/userSlice";
import  moment from "moment";
const Orders = () => {
  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
    },
    Accept: "application/json",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders(config2));
  }, []);
  const orderState = useSelector((state) => state?.auth?.orders);
  return (
    <>
      <Meta title="My Orders" />
      <BreadCrumb title="My Orders" />
      <Container class1="cart-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Order Id</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount After Discount</h5>
              </div>
              <div className="col-3 d-flex gap-10 ">
                <h5>Status</h5>
                <h5>Date</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div key={index} className="row">
                    <div className="col-3 pt-3 order-card-heading heading-item-1">
                      <p>{item?._id}</p>
                    </div>
                    <div className="col-3 pt-3 order-card-heading">
                      <p>{item?.totalPrice}</p>
                    </div>
                    <div className="col-3 pt-3 order-card-heading">
                      <p>{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3 pt-3 order-card-heading heading-item-4 d-flex gap-15">
                      <p>{item?.orderStatus}</p>
                      <p>
                        {
                          moment(item?.createdAt).format(
                          "MMMM Do YYYY, h:mm a"
                          )
                        }
                      </p>
                    </div>
                    <div className="col-12">
                      <div className="row order-card-content py-3">
                        <div className="col-3 py-3">
                          <h6>Product Name</h6>
                        </div>
                        <div className="col-3 py-3">
                          <h6>Quantity</h6>
                        </div>
                        <div className="col-3 py-3">
                          <h6>Price</h6>
                        </div>
                        <div className="col-3 py-3">
                          <h6>Color</h6>
                        </div>
                        <div className="col-12">
                          {item?.orderItems &&
                            item?.orderItems.map((prod, idx) => {
                              return (
                                <div
                                  className="row order-card-content py-3"
                                  key={idx}
                                >
                                  <div className="col-3">
                                    <h6> {prod?.product?.title} </h6>
                                  </div>
                                  <div className="col-3">
                                    <h6> {prod?.quantity} </h6>
                                  </div>
                                  <div className="col-3">
                                    <h6> {prod?.price} </h6>
                                  </div>
                                  <div className="col-3">
                                    <h6>
                                      <ul className="colors ps-0">
                                        <li
                                          style={{
                                            backgroundColor: prod?.color?.title,
                                          }}
                                        ></li>
                                      </ul>
                                    </h6>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;

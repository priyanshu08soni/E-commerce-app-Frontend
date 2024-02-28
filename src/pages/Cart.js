import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateProductQuantityFromCart,
} from "../features/user/userSlice";

const Cart = () => {
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateProductQuantityFromCart({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [productUpdateDetail]);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < userCartState.length; i++) {
      sum = sum + Number(userCartState[i].quantity * userCartState[i].price);
    }
    setTotalPrice(sum);
  }, [userCartState]);
  const deleteProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex cart-header justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex cart-data justify-content-between align-items-center py-4"
                  >
                    <div className="cart-col-1 gap-15 d-flex">
                      <div className="w-25">
                        <img
                          src="/images/watch.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId?.title}</p>
                        <p className="d-flex gap-3 fs-6">
                          Color:
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">
                        <b>$ {item?.price}</b>
                      </h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          type="number"
                          min={1}
                          max={10}
                          className="form-control"
                          value={
                            productUpdateDetail?.quantity
                              ? productUpdateDetail?.quantity
                              : item?.quantity
                          }
                          onChange={(e) => {
                            setProductUpdateDetail({
                              cartItemId: item?._id,
                              quantity: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="delete">
                        <AiFillDelete
                          onClick={() => {
                            deleteProduct(item?._id);
                          }}
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        <b>$ {item?.quantity * item?.price}</b>
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-12 py-4 cart-data ">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              {totalPrice !== 0 && (
                <div className="d-flex align-items-end flex-column">
                  <h4>SubTotal: $ {totalPrice}</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;

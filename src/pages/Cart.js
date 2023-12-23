import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
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
              <div className="d-flex cart-data justify-content-between align-items-center py-4">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src="/images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-75">
                    <p>Watch</p>
                    <p>Size: RED</p>
                    <p>Color: RED</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">
                    <b>$ 100</b>
                  </h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="form-control"
                    />
                  </div>
                  <div className="delete">
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">
                    <b>$ 100</b>
                  </h5>
                </div>
              </div>
              <div className="d-flex cart-data justify-content-between align-items-center py-4">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src="/images/tab.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-75">
                    <p>Watch</p>
                    <p>Size: RED</p>
                    <p>Color: RED</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">
                    <b>$ 100</b>
                  </h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="form-control"
                    />
                  </div>
                  <div className="delete">
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">
                    <b>$ 100</b>
                  </h5>
                </div>
              </div>
              <div className="d-flex cart-data justify-content-between align-items-center py-4">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="/images/watch-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-75">
                    <p>Watch</p>
                    <p>Size: RED</p>
                    <p>Color: RED</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">
                    <b>$ 100</b>
                  </h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="form-control"
                    />
                  </div>
                  <div className="delete">
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">
                    <b>$ 100</b>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-4 cart-data ">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex align-items-end flex-column">
                  <h4>SubTotal: $ 300</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to='/checkout' className="button">Checkout</Link>

                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Cart;

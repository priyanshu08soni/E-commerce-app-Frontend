import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3 mt-1"
        }`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="/images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              className="img-fluid"
              src="/images/watch.jpg"
              alt="product /images"
            />
            <img
              className="img-fluid"
              src="/images/watch-1.jpg"
              alt="product /images"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">
              <b>Havels</b>
            </h6>
            <h5 className="product-title">
              Kids headplones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              edit={false}
              size={24}
              value="3"
              activeColor="#ffd700"
            ></ReactStars>
            <p className={`description ${grid===12?"d-block":"d-none"}`} >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              voluptas voluptates veniam natus quam, et vero reprehenderit sunt?
              Facilis impedit libero quod architecto totam.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="/images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;

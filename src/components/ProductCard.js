import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWish } from "../features/user/userSlice";


const ProductCard = (props) => {
  const { grid, data, category } = props;
  let location = useLocation();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const addToWishlist = (prodId) => {
    dispatch(addToWish(prodId));
  };
  return (
    <>
      {data &&
        data?.map((item, index) => {
          if (category) {
            if (item?.tags === category) {
              return (
                <div
                  key={index}
                  className={`${
                    location.pathname === "/product"
                      ? `gr-${grid}`
                      : "col-3 mt-1"
                  }`}
                >
                  <div className="product-card position-relative"
                  >
                    <div className="wishlist-icon position-absolute">
                      <button className="border-0 bg-transparent">
                        <img
                          src="/images/wish.svg"
                          alt="wishlist"
                          onClick={() => {
                            addToWishlist(item?._id);
                          }}
                        />
                      </button>
                    </div>
                    <div className="product-image">
                      <img
                        className="img-fluid w-100"
                        src={item?.images[0].url}
                        alt="product /images"
                      />
                      <img
                        className="img-fluid w-100"
                        src={item?.images[0].url}
                        alt="product /images"
                      />
                    </div>
                    <div className="product-details">
                      <h6 className="brand">
                        <b>{item?.brand}</b>
                      </h6>
                      <h5 className="product-title">{item?.title}</h5>
                      <ReactStars
                        count={5}
                        edit={false}
                        size={24}
                        value={item?.totalrating.toString()}
                        activeColor="#ffd700"
                      ></ReactStars>
                      <p
                        className={`description ${
                          grid === 12 ? "d-block" : "d-none"
                        }`}
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      ></p>
                      <p className="price">${item?.price}</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
                          <img src="/images/prodcompare.svg" alt="compare" />
                        </button>
                        <button className="border-0 bg-transparent">
                          <img src="/images/view.svg" onClick={()=>navigate("/product/"+item?._id)} alt="view" />
                        </button>
                        <button className="border-0 bg-transparent">
                          <img src="/images/add-cart.svg" alt="addcart" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          } else {
            return (
              <div
                key={index}
                className={`${
                  location.pathname === "/product" ? `gr-${grid}` : "col-3 mt-1"
                }`}
              >
                <div className="product-card position-relative">
                  <div className="wishlist-icon position-absolute">
                    <button className="border-0 bg-transparent">
                      <img
                        src="/images/wish.svg"
                        alt="wishlist"
                        onClick={() => {
                          addToWishlist(item?._id);
                        }}
                      />
                    </button>
                  </div>
                  <div className="product-image">
                    <img
                      className="img-fluid w-100"
                      src={item?.images[0].url}
                      alt="product /images"
                      onClick={()=>navigate("/product/"+item?._id)}
                    />
                    <img
                      className="img-fluid w-100"
                      src={item?.images[0].url}
                      alt="product /images"
                      onClick={()=>navigate("/product/"+item?._id)}
                    />
                  </div>
                  <div className="product-details">
                    <h6 className="brand">
                      <b>{item?.brand}</b>
                    </h6>
                    <h5 className="product-title">{item?.title}</h5>
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      value={item?.totalrating.toString()}
                      activeColor="#ffd700"
                    ></ReactStars>
                    <p
                      className={`description ${
                        grid === 12 ? "d-block" : "d-none"
                      }`}
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></p>
                    <p className="price">${item?.price}</p>
                  </div>
                  <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <button className="border-0 bg-transparent">
                        <img src="/images/prodcompare.svg" alt="compare" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src="/images/view.svg" onClick={()=>navigate("/product/"+item?._id)} alt="view" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src="/images/add-cart.svg" alt="addcart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default ProductCard;

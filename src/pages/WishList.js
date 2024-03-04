import React, { useEffect } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { addToWish, getUserWishlist } from "../features/user/userSlice";


const WishList = () => {
  const wlState= useSelector((state) => state?.auth?.wishlist?.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  },[]);
  const getWishlistFromDb = () => {
    dispatch(getUserWishlist());
  };
  const removeFromWishlist=(id)=>{
    dispatch(addToWish(id));
    setTimeout(() => {
      dispatch(getUserWishlist());
    }, 100);
  }
 
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          { wlState &&  wlState?.map((item, index) => {
            return(
            <div className="col-3" key={index}>
              <div className="wishlist-card position-relative">
                <img
                  onClick={removeFromWishlist(item?._id)}
                  src="images/cross.svg"
                  className="cross position-absolute img-fluid"
                  alt="cross"
                />
                <div className="wishlist-card-image bg-white" >
                  <img
                    src={item?.images?.url
                      ? item?.images?.url
                      :"images/watch.jpg"}
                    className="img-fluid d-block mx-auto"
                    alt="watch"
                    width={160}
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    {item.title}
                  </h5>
                  <h6 className="price">$ {item.price}</h6>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </Container>
    </>
  );
};

export default WishList;

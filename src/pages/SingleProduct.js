import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/products/productSlice";
import { addToCart, getUserCart } from "../features/user/userSlice";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const navigate=useNavigate();
  const prodId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [orderdProduct, setorderdProduct] = useState(true);
  const cartState = useSelector((state) => state.auth.cartProducts);

  const [alreadyAdded, setAlreadyAdded] = useState(false);
  useEffect(() => {
    dispatch(getAProduct(prodId));
    dispatch(getUserCart());
  }, []);
  const productState = useSelector((state) => state.product.SingleProduct);
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (prodId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);
  const uploadToCart = () => {
    if (color === null) {
      toast.error("Please Choose Color");
      return false;
    } else {
      dispatch(
        addToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
    }
  };
  const props = {
    width: 500,
    height: 500,
    zoomWidth: 500,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "/images/tab.jpg",
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <Container className="home-wrapper-2 main-product-wrapper py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="d-flex flex-wrap gap-15 other-product-images">
              {productState &&
                productState?.images.map((item, index) => {
                  return (
                    <div>
                      <img className="img-fluid" src={item?.url} alt="" />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    edit={false}
                    size={24}
                    value={productState?.totalrating}
                    activeColor="#ffd700"
                  ></ReactStars>{" "}
                  <p className="mb-0 t-review">( 2 reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-4">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Tablet</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-4">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-4">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data d-flex">
                    <p className="mb-0 px-2">{productState?.category}</p>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-4">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data d-flex">
                    <p className="mb-0 px-2">{productState?.tags}</p>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-4">
                  <h3 className="product-heading">Availability:</h3>
                  <p className="product-data">
                    {productState?.quantity - productState?.sold} In Stock
                  </p>
                </div>
                <div className="d-flex gap-10 flex-column my-4">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary p-2">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary p-2">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary p-2">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary p-2">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary p-2">
                      XXL
                    </span>
                  </div>
                </div>
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 flex-column my-4">
                      <h3 className="product-heading">Color:</h3>
                      <div className="d-flex flex-wrap gap-10">
                        <Color
                          setColor={setColor}
                          colorData={productState?.color}
                        />
                      </div>
                    </div>
                    <div className="d-flex gap-10 flex-column my-4">
                      <h3 className="product-heading">Quantity:</h3>
                      <div className="d-flex flex-row gap-30">
                        <input
                          type="number"
                          className="form-control"
                          min={1}
                          max={10}
                          style={{ width: "60px" }}
                          onChange={(e) => {
                            setQuantity(e.target.value);
                          }}
                          value={quantity}
                        />
                        <button
                          className="button border-0"
                          onClick={() => {
                            uploadToCart();
                          }}
                        >
                          ADD TO CART
                        </button>
                        <Link to="/signup" className="button signup">
                          BUY NOW
                        </Link>
                      </div>
                    </div>
                  </>
                )}
                {alreadyAdded === true && (
                  <>
                    <div className="d-flex flex-row gap-30 my-4">
                      <button
                        className="button border-0"
                        onClick={() => {
                          navigate("/cart");
                        }}
                      >
                        Go-To Cart
                      </button>
                    </div>
                  </>
                )}
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column">
                  <h3 className="product-heading mt-4">Shipping & Returns:</h3>
                  <p className="product-data">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Provident eveniet odio beatae cum{" "}
                    <b>Lorem ipsum dolor sit amet.</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-4">
                  <h3 className="product-heading">Copy Product Link:</h3>
                  <a
                    className="text-danger"
                    href={"javascript:void(0)"}
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{
                  __html: productState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      value="3"
                      activeColor="#ffd700"
                    ></ReactStars>
                    <p className="mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {orderdProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      {" "}
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4 className="mb-2">Write A Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      edit={true}
                      size={24}
                      value="3"
                      activeColor="#ffd700"
                    ></ReactStars>
                  </div>
                  <div>
                    <textarea
                      name=""
                      placeholder="Comments"
                      className="w-100 form-control"
                      id=""
                      cols="30"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Priyanshu</h6>
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      value="3"
                      activeColor="#ffd700"
                    ></ReactStars>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut id, at beatae obcaecati laboriosam corporis repellat vel
                    molestias nisi eveniet expedita. Ipsum autem molestias sint
                    fugiat voluptas, voluptatem odit sunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Suggestions</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;

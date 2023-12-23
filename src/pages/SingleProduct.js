import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const SingleProduct = () => {
  const [orderdProduct, setorderdProduct] = useState(true);
  const props = {
    width: 500,
    height: 500,
    zoomWidth: 500,
    img: "/images/tab.jpg",
  };
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

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
                <div>
                  <img className="img-fluid" src="/images/tab.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/tab1.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/tab2.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/tab3.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids Tablet Bulk 10 Pack Multi Colored For Students</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      value="3"
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
                    <p className="product-data">Apple</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-4">
                    <h3
                      className="product-heading"
                      style={{ paddingBottom: "22px" }}
                    >
                      Categories:
                    </h3>
                    <p className="product-data">
                      airpods, camera's, Computers & Laptop, headphones, mini
                      speaker, our store, Portable Speakers, smart phones, Smart
                      Television, Smartwatches
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-4">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data d-flex">
                      <p className="mb-0 px-2">headphones</p>
                      <p className="mb-0 px-2">laptop</p>
                      <p className="mb-0 px-2">mobile</p>
                      <p className="mb-0 px-2">oppo</p>
                      <p className="mb-0 px-2">speaker</p>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-4">
                    <h3 className="product-heading">SKU:</h3>
                    <p className="product-data">SKU027</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-4">
                    <h3 className="product-heading">Availability:</h3>
                    <p className="product-data">541 In Stock</p>
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
                  <div className="d-flex gap-10 flex-column my-4">
                    <h3 className="product-heading">Color:</h3>
                    <div className="d-flex flex-wrap gap-10">
                      <Color />
                      <Color />
                      <Color />
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
                      />
                      <button className="button border-0">ADD TO CART</button>
                      <Link to="/signup" className="button signup">
                        BUY NOW
                      </Link>
                    </div>
                  </div>
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
                    <h3 className="product-heading"  >Copy Product Link:</h3>
                    <a href={"javascript:void(0)"} onClick={()=>{copyToClipboard("/images/tab.jpg")}}>
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
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid quod sint nulla ipsum rem corrupti repellat a. Ab
                  repellat fugit numquam, deleniti officiis, adipisci quia
                  laboriosam soluta ad suscipit commodi architecto. Nulla, quo
                  dolores.
                </p>
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
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
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
                      Aut id, at beatae obcaecati laboriosam corporis repellat
                      vel molestias nisi eveniet expedita. Ipsum autem molestias
                      sint fugiat voluptas, voluptatem odit sunt.
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

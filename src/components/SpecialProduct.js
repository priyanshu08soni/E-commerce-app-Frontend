import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = (props) => {
  const {title,brand,totalrating,price,sold,quantity,id}=props;
  return (
    <div className="col-4" style={{marginBottom:"24px"}}>
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img-fluid" src="images/watch.jpg" alt="" />
          </div>
          <div className="special-product-content">
            <h6 className="brand" style={{color:"red"}}>{brand}</h6>
            <h6 className="title" style={{fontSize:"15px"}}>
              {title}
            </h6>
            <ReactStars
              count={5}
              edit={false}
              size={24}
              value={totalrating}
              activeColor="#ffd700"
            ></ReactStars>
            <p className="price">
              <span className="red-p" style={{color:"red"}}>${price}</span> &nbsp; 
              {/* <strike>$200</strike> */}
            </p>
            <div className="discount-till d-flex align-items-center  gap-10">
              <p className="mb-0" style={{fontSize:"15px"}}>
                <b>5 </b>days
              </p>
              <div className="d-flex mx-2 align-items-center">
                <span className="badge rounded-circle mx-1 bg-danger">1</span>:
                <span className="badge rounded-circle mx-1 bg-danger">1</span>:
                <span className="badge rounded-circle mx-1 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count mb-3 mt-1">
              <p className="mb-1" style={{fontSize:"10px"}}>Products: {quantity}</p>
              <div className="progress" style={{height:"0.5rem"}}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: (quantity/(quantity+sold))*100 +"%" }}
                  aria-valuenow={(quantity/(quantity+sold))*100}
                  aria-valuemin={quantity}
                  aria-valuemax={sold+quantity}
                ></div>
              </div>
            </div>
            <Link className="button py-2 px-4" to={`/product/${id}`} >View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;

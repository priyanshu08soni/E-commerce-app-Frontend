import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

import Colors from "../components/Color";
const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Show By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      id=""
                      className="form-check-input"
                    />
                    <label htmlFor="" className="form-check-label">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      id=""
                      className="form-check-input"
                    />
                    <label htmlFor="" className="form-check-label">
                      Out of Stock
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type=""
                      placeholder="From"
                      id="floatingInput"
                      className="form-control py-1"
                    />
                    <label htmlFor="">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type=""
                      placeholder="To"
                      id="floatingInput1"
                      className="form-control py-1"
                    />
                    <label htmlFor="">TO</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div className="d-flex flex-wrap gap-10">
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                  <Colors />
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      id="color-1"
                      className="form-check-input"
                    />
                    <label htmlFor="color-1" className="form-check-label">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      id="color-2"
                      className="form-check-input"
                    />
                    <label htmlFor="color-2" className="form-check-label">
                      M (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      id="color-3"
                      className="form-check-input"
                    />
                    <label htmlFor="color-3" className="form-check-label">
                      L (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      id="color-4"
                      className="form-check-input"
                    />
                    <label htmlFor="color-4" className="form-check-label">
                      XL (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      id="color-5"
                      className="form-check-input"
                    />
                    <label htmlFor="color-5" className="form-check-label">
                      XXL (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      id="color-6"
                      className="form-check-input"
                    />
                    <label htmlFor="color-6" className="form-check-label">
                      XXXL (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Oppo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speaker
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Vivo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablet
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Products</h3>
              <div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      className="img-fluid"
                      src="images/tab3.jpg"
                      alt="tab"
                    />
                  </div>
                  <div className="w-50 px-3  mb-3">
                    <h5>
                      Kids headphone bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      value="3"
                      activeColor="#ffd700"
                    ></ReactStars>
                    <b>$ 300</b>
                  </div>
                </div>
                <div className="random-products d-flex mt-3">
                  <div className="w-50">
                    <img
                      className="img-fluid"
                      src="images/watch.jpg"
                      alt="tab"
                    />
                  </div>
                  <div className="w-50 px-3">
                    <h5>
                      Kids headphone bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      value="3"
                      activeColor="#ffd700"
                    ></ReactStars>
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    id=""
                    className="form-control form-select"
                    style={{ fontSize: "14px" }}
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-scending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalProducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pt-3">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

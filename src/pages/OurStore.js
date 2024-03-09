import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import {useDispatch, useSelector} from "react-redux"
import Colors from "../components/Color";
import { getProducts } from "../features/products/productSlice";
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const dispatch=useDispatch();
  
  const productState=useSelector((state)=>state?.product?.product);
  const [brands,setBrands]=useState(null);
  const [tags,setTags]=useState(null);
  const [sort,setSort]=useState(null);
  const [categories,setCategories]=useState(null);


  const [brand,setBrand]=useState(null);
  const [tag,setTag]=useState(null);
  const [category,setCategory]=useState(null);
  const [minPrice,setMinPrice]=useState(null);
  const [maxPrice,setMaxPrice]=useState(null);
  useEffect(()=>{
    let data=[];
    let categoryData=[];
    let newTags=[];
    for (let i = 0; i < productState.length; i++) {
      const element = productState[i];
      data.push(element?.brand);
      categoryData.push(element?.category);
      newTags.push(element?.tags);
    }
    setBrands(data);
    setCategories(categoryData);
    setTags(newTags);
  },[]);
  

  useEffect(()=>{
    dispatch(getProducts({
      sort,
      tag,
      brand,
      category,
      minPrice,
      maxPrice
    }));
  },[sort,
    tag,
    brand,
    category,
    minPrice,
    maxPrice])
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
                  {
                    categories && [...new Set(categories)]?.map((item,index)=>{
                      return(
                        <li key={index} onClick={()=>setCategory(item)} >{item}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div className="mt-2">
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      placeholder="From"
                      id="floatingInput"
                      className="form-control py-1"
                      onChange={(e)=>{setMinPrice(e.target.value)}}
                    />
                    <label htmlFor="">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      placeholder="To"
                      id="floatingInput1"
                      className="form-control py-1"
                      onChange={(e)=>{setMaxPrice(e.target.value)}}
                    />
                    <label htmlFor="">TO</label>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="sub-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {
                      tags && [...new Set(tags)]?.map((item,index)=>{
                        return(
                          <span 
                            className="badge text-capitalize  bg-light text-secondary rounded-3 py-2 px-3" 
                            key={index} 
                            onClick={()=>setTag(item)} 
                            style={{cursor:"pointer"}}
                          >
                            {item}
                          </span>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="sub-title">Product Brands</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {
                      brands && [...new Set(brands)]?.map((item,index)=>{
                        return(
                          <span 
                          style={{cursor:"pointer"}}
                            className="badge text-capitalize  bg-light text-secondary rounded-3 py-2 px-3" 
                            key={index} 
                            onClick={()=>setBrand(item)} 
                          >
                            {item}
                          </span>
                        )
                      })
                    }
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
                    onChange={(e)=>{setSort(e?.target?.value)}}
                  >
                    <option value="" defaultValue={""}>Filter Products</option>
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">
                      Alphabetically, Z-A
                    </option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
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
                <ProductCard data={productState} grid={grid} />

              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

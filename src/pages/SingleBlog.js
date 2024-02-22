import React, { useEffect } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
  const dispatch=useDispatch();
  const location = useLocation();
  const blogId=location.pathname.split("/")[2];
  const blogState=useSelector(state=>state.blog.singleBlog);
 
  useEffect(()=>{
    dispatch(getABlog(blogId));
  },[])

  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link
                to="/blogs"
                className="d-flex align-items-center gap-10 text-center"
              >
                <FaArrowLeftLong className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">{blogState.title}</h3>
              <div className="blog-side-design gap-5">
                <img
                  src={blogState.images[0].url}
                  className="img-fluid w-33 my-4 rounded-2"
                  alt="blog-img"
                />
                <div className="my-4">
                  <h5>Description</h5>
                  <p>
                    {blogState.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;

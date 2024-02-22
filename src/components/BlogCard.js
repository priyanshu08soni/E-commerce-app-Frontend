import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";
import  moment from "moment";
const BlogCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const blogState = useSelector((state) => state.blog.blog);
  return (
    <>
      {blogState &&
        blogState?.map((blog, index) => {
          return (
            <div key={index} className="blog-card w-100">
              <div className="card-image">
                <img
                  className="img-fluid w-100"
                  src="images/blog-1.jpg"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <p className="date">
                  {
                    moment(blog?.createdAt).format(
                      "MMMM Do YYYY, h:mm a"
                    )
                  }
                </p>
                <h5 className="title">
                  {blog.title}
                </h5>
                <p className="desc">
                  {blog.description.substr(0,70)+"..."}
                </p>
                <Link to={`/blog/${blog._id}`} className="button">
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BlogCard;

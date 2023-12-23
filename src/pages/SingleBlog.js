import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Container from "../components/Container";

const SingleBlog = () => {
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
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src="/images/blog-1.jpg"
                className="img-fluid w-100 my-4"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates doloremque error, veritatis temporibus ea blanditiis,
                nesciunt voluptate mollitia sunt perferendis officia in
                reiciendis quo itaque praesentium voluptas aut quam! Maiores eum
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                debitis hic, non, illo delectus consectetur voluptatem veniam
                fuga distinctio blanditiis, doloremque aperiam sed. tempora
                expedita quod.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;

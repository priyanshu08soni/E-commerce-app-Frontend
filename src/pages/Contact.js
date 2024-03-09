import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import Container from "../components/Container";

import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import * as yup from "yup";
import { useFormik, validateYupSchema } from "formik";
import { useDispatch } from "react-redux";
import { postQuery } from "../features/contact/contactSlice";
const contactSchema=yup.object({
  name:yup.string().required("Name is required"),
  email:yup.string().nullable().email("Email should be valid").required("Email is required"),
  mobile:yup.string().default('').nullable().required("Mobile Number is required"),
  comment:yup.string().default('').nullable().required("comment is required"),
})

const Contact = () => {
  const dispatch=useDispatch();
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      mobile:"",
      comment:"",
    },
    validationSchema:contactSchema,
    onSubmit:values=>{
      dispatch(postQuery(values))
    }
  })
  return (
    <>
      <Meta title="Contact" />
      <BreadCrumb title="Contact" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            {/*eslint-disable-next-line */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10126.639160651559!2d75.78973402485867!3d26.186669924729642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e63e2356704e3%3A0xcfad94946bedc2b4!2sDr.%20Ambedkar%20College%2C%20Tonk!5e0!3m2!1sen!2sin!4v1702661104003!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              className="w-100"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form  
                onSubmit={formik.handleSubmit} 
                action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="errors">
                      {
                        formik.touched.name && formik.errors.name
                      }
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <div className="errors">
                      {
                        formik.touched.email && formik.errors.email
                      }
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="form-control"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <div className="errors">
                      {
                        formik.touched.mobile && formik.errors.mobile
                      }
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Comments"
                      className="w-100 form-control"
                      id=""
                      cols="30"
                      rows="4"
                      name="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    />
                    <div className="errors">
                      {
                        formik.touched.comment && formik.errors.comment
                      }
                    </div>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in Touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaHome className="fs-5" />
                      <address className="mb-0">
                        Hno:277 , Near Panchkuiya darwaja , Purani Tonk , Tonk ,
                        Rajasthan
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoIosCall className="fs-5" />
                      <a href="tel:+91 8000643228">+91 8000643228</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoMdMail className="fs-5" />
                      <a href="mailto:priyanshus20k4@gmail.com">
                        priyanshus20k4@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaCircleInfo className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;

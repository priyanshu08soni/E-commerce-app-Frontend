import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import {useFormik} from "formik";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import { forgotPassToken } from "../features/user/userSlice";
let forgotPasswordSchema=yup.object({
  email:yup.string().email().required("Valid Email is Required")
})
const ForgotPassword = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const formik=useFormik({
    initialValues:{
      email:"",
    },
    validationSchema:forgotPasswordSchema,
    onSubmit:(values)=>{
      dispatch(forgotPassToken(values));
    }
  })
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <Container class1="py-5 login-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form action=""  onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  OnBlur={formik.handleBlur("email")}
                />
                <div className="errors">
                  {
                    formik.touched.email && formik.errors.email
                  }
                </div>
                <div>
                  <div className="mt-1 d-flex justify-content-center flex-column align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;

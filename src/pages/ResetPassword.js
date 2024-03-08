import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useLocation } from "react-router-dom";

import {useFormik} from "formik";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import { resetPass } from "../features/user/userSlice";
let resetPasswordSchema=yup.object({
  password:yup.string().required("New password is Required")
})
const ResetPassword = () => {
  const location = useLocation();
  const getToken=location.pathname.split("/")[2]
  const dispatch=useDispatch();
  const formik=useFormik({
    initialValues:{
      password:"",
    },
    validationSchema:resetPasswordSchema,
    onSubmit:(values)=>{
      dispatch(resetPass({token:getToken,password:values}));
    }
  })
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <Container class1="py-5 login-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-control"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  OnBlur={formik.handleBlur("password")}
                />
                <div className="errors">
                  {
                    formik.touched.password && formik.errors.password
                  }
                </div>
                <div>
                  <div className="mt-1 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Reset
                    </button>
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
export default ResetPassword;

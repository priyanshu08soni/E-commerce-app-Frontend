import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <Container class1="py-5 login-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="form-control"
                />
                <CustomInput
                  name="Mobile"
                  type="tel"
                  placeholder="Mobile Number"
                  className="form-control"
                />
                <CustomInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
                <div>
                  <div className="mt-1 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Sign Up</button>
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

export default SignUp;

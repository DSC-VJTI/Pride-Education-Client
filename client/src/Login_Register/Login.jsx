import React from "react";
import "./css/FormStyle.css";
const Login = () => {
  return (
    <>
      <h1 class="heading text-center" style={{ color: "#0065d1" }}>
        Login To your Account
      </h1>
      <div className="row">
        <div className="mainSection col-md-9 col-12">
          <form className="my-5">
            <div className="row">
              <div class="mb-3 col-10 my-3 mx-auto ">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Email Address"
                />
              </div>
              <div class="mb-3 col-10 my-3 mx-auto ">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <button type="submit" class="btn btn-primary col-3 mt-5 mx-auto">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;

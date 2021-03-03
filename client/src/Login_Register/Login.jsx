import React, { useState } from "react";
import "./css/FormStyle.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const onLogin = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name == "email") {
      setEmail(value);
    }
    if (name == "number") {
      setNumber(value);
    }
  };
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
                  onChange={onLogin}
                  name="email"
                  value={email}
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div class="mb-3 col-10 my-3 mx-auto ">
                <input
                  name="number"
                  value={number}
                  onChange={onLogin}
                  type="tel"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Mobile Number"
                  required
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

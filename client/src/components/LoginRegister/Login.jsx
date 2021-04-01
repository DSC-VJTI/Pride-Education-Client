import React, { useState } from "react";
import { FormControl, InputLabel } from "@material-ui/core";
import "./css/FormStyle.css";
import { sendOTP } from "../../actions/authActions";
import { Redirect } from "react-router-dom";
import OtpPage from "./inputOTP";
import { useAuthState, useAuthDispatch } from "../../context/context";
import { Input } from "../UI Elements/Input";
import { Button } from "../UI Elements/Button";
const Login = (props) => {
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);
  const [alert, setAlert] = useState(null);

  //States Used for Validation Starts from Here
  const [warningEmail, setWarningEmail] = useState("");

  const validateEmail = () => {
    let isEmailValidated = true;
    let pattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!pattern.test(email)) {
      setWarningEmail("Please enter a valid email Address");
      isEmailValidated = false;
    } else {
      setWarningEmail("");
    }

    return isEmailValidated;
  };

  const onBtnClick = (event) => {
    event.preventDefault();
    if (validateEmail()) {
      sendOTP({ dispatch, email, type: "Login" }).then((res) => {
        if (res.status === 200) {
          setData(res);
        } else if (res.status === 404)
          setWarningEmail("Email not found. Please register first."); //TODO: Add alert popup funtionality
      });
    }
  };

  const onLogin = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "number") {
      setNumber(value);
    }
  };

  return !data ? (
    <>
      <div className="formOuterBody">
        <div className="form">
          <div className="mainSection">
            <h1
              className="heading"
              style={{ color: "#f26522", textAlign: "center" }}
            >
              Login
            </h1>
            <form>
              <div className="">
                <div style={{ margin: "0 20px" }}>
                  <Input
                    label="Email Address*"
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onLogin}
                    required="required"
                  />
                  {/* <FormControl
                  className="inputField"
                  style={{ width: "90%", marginBottom: "0.4rem" }}
                >
                  <InputLabel htmlFor="my-input">
                    Enter Email address
                  </InputLabel>
                  <Input
                    name="email"
                    value={email}
                    onChange={onLogin}
                    type="text"
                    id="my-input"
                    aria-describedby="my-helper-text"
                  />
                  <small style={{ color: "red" }}>{warningEmail}</small>
                </FormControl> */}
                </div>
                <div className="" style={{ marginTop: "0.3rem" }}>
                  <Button
                    style={{
                      width: "20%",
                      // alignSelf: "left",
                      // marginTop: "1rem",
                      marginLeft: "1.5rem"
                    }}
                    disabled={loading}
                    type="submit"
                    onClick={onBtnClick}
                    variant="contained"
                    text="Send OTP"
                  />
                  {/* <Button
                  onClick={onBtnClick}
                  className="submit_btn"
                  type="submit"
                  style={{
                    backgroundColor: " #455ff0",
                    width: "30%",
                    alignSelf: "left",
                    marginTop: "1rem",
                    marginLeft: "2rem"
                  }}
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  Send OTP
                </Button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <OtpPage
      type="Login"
      data={{ email: data.data.email, hash: data.data.hash }}
    />
  );
};
export default Login;

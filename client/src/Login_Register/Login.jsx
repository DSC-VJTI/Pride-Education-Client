import React, { useState } from "react";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import "./css/FormStyle.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  //States Used for Validation Starts from Here
  const [warningNumber, setWarningNumber] = useState("");
  const [warningEmail, setWarningEmail] = useState("");
  const validateNumber = () => {
    if (number.length !== 10 || isNaN(number)) {
      setWarningNumber("Please enter a valid mobile number");
    }
    if (number.length === 10 && !isNaN(number)) {
      setWarningNumber("");
    }
  };
  const validateEmail = () => {
    if (
      email.length > 0 &&
      email.indexOf("@") > -1 &&
      isNaN(email[0]) &&
      email.indexOf(".") > -1
    ) {
      setWarningEmail("");
    } else {
      setWarningEmail("Please enter a valid email Address");
    }
  };
  const onBtnClick = (event) => {
    event.preventDefault();
    validateNumber();
    validateEmail();
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
  return (
    <>
      <h1 className="heading" style={{ color: "#0065d1", textAlign: "center" }}>
        Login To your Account
      </h1>
      <div className="mainSection">
        <form>
          <div className="">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FormControl
                className="inputField"
                style={{ width: "90%", marginBottom: "0.4rem" }}
              >
                <InputLabel htmlFor="my-input">Enter Email address</InputLabel>
                <Input
                  name="email"
                  value={email}
                  onChange={onLogin}
                  type="text"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <small style={{ color: "red" }}>{warningEmail}</small>
              </FormControl>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FormControl
                className="inputField"
                style={{ width: "90%", marginTop: "0.3rem" }}
              >
                <InputLabel htmlFor="my-input">Enter Mobile Number</InputLabel>
                <Input
                  id="number"
                  name="number"
                  value={number}
                  onChange={onLogin}
                  type="text"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <small style={{ color: "red" }}>{warningNumber}</small>
              </FormControl>
            </div>
            <div className="" style={{ marginTop: "0.3rem" }}>
              <Button
                onClick={onBtnClick}
                className="submit_btn"
                type="submit"
                style={{
                  backgroundColor: " #455ff0",
                  width: "30%",
                  alignSelf: "center",
                  marginTop: "1rem",
                  marginLeft: "2rem",
                }}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;

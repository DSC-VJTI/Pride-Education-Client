import React, { useState } from "react";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
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
      <h1 className="heading" style={{ color: "#0065d1", textAlign: "center" }}>
        Login To your Account
      </h1>
      <div className="mainSection">
        <form method="post" action="">
          <div className="">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FormControl
                className="inputField"
                style={{ width: "90%", marginBottom: "1rem" }}
              >
                <InputLabel htmlFor="my-input">Enter Email address</InputLabel>
                <Input
                  name="email"
                  value={email}
                  onChange={onLogin}
                  type="email"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FormControl
                className="inputField"
                style={{ width: "90%", marginTop: "1rem" }}
              >
                <InputLabel htmlFor="my-input">Enter Mobile Number</InputLabel>
                <Input
                  name="number"
                  value={number}
                  onChange={onLogin}
                  type="tel"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
            </div>
            <div className="" style={{ marginTop: "1rem" }}>
              <Button
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

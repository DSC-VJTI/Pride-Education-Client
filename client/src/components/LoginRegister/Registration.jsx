import React, { useState, useEffect } from "react";
import "./css/FormStyle.css";
import * as yup from "yup";
import { Formik } from "formik";
import OtpPage from "./inputOTP";
import { sendOTP } from "../../actions/authActions";
import { useAuthState, useAuthDispatch } from "../../context/context";
import { Button } from "../UI Elements/Button";
import { Input } from "../UI Elements/Input";
import { DropDown } from "../UI Elements/DropDown";
const signUpSchema = yup.object().shape({
  name: yup.string().required("Please enter your name."),
  email: yup.string().email().required("Please enter your email."),
  address: yup
    .string()
    .required("Please enter your address.")
    .min(5, "Please enter full address"),
  mobileNumber: yup
    .number("Please input valid number")
    .required("Please enter your mobile number without country code.")
    .min(1000000000, "Please input valid number")
    .max(9999999999, "Please input valid number"),
  field: yup.string().required("Please enter your field"),
  level: yup.string().required("Please enter the level you are interested in."),
  reference: yup.string().required("Please tell us how you heard about us.")
  // dateOfAttempt: yup.date().required('Please enter date of attempt')
});

const initialValues = {
  name: "",
  email: "",
  mobileNumber: "",
  address: "",
  field: "",
  level: "",
  reference: ""
  // dateOfAttempt: Date.now()
};

const Registration = () => {
  const [formData, setFormData] = useState(null);
  const [alert, setAlert] = useState("");
  const dispatch = useAuthDispatch();
  const onBtnClick = () => {};
  return !formData ? (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        sendOTP({ dispatch, email: values.email, type: "Register" }).then(
          (res) => {
            if (res.status === 200) {
              setFormData({
                ...values,
                hash: res.data.hash
              });
            } else if (res.status === 422) {
              setAlert(
                "Email or phone number already in use. Please login instead."
              );
            } else {
              setAlert(res.error);
            }
          }
        );
      }}
    >
      {(props) => (
        <div className="formOuterBody">
          <div className="form">
            <div className="mainSection">
              <h1
                className="heading"
                style={{ color: "#f26522", textAlign: "center" }}
              >
                Sign up for a free account
              </h1>
              <form onSubmit={props.handleSubmit}>
                <div
                  className="inputField"
                  style={{
                    width: "92%",
                    margin: "20px auto",
                    position: "relative"
                  }}
                >
                  <Input
                    name="name"
                    type="text"
                    label="Full Name*"
                    placeholder="Enter Full Name"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                  />
                  {props.touched.name ? (
                    <small
                      className="errorForumber"
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "-10px",
                        left: "10px"
                      }}
                    >
                      {props.errors.name}
                    </small>
                  ) : null}
                </div>
                <div
                  className="inputField"
                  style={{
                    width: "92%",
                    margin: "20px auto",
                    position: "relative"
                  }}
                >
                  <Input
                    label="Email Address*"
                    placeholder="Enter Email address"
                    name="email"
                    type="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                  />
                  {props.touched.email ? (
                    <small
                      className="errorForumber"
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "-10px",
                        left: "10px"
                      }}
                    >
                      {props.errors.email}
                    </small>
                  ) : null}
                </div>
                <div
                  className="inputField"
                  style={{ width: "92%", margin: "auto", position: "relative" }}
                >
                  <Input
                    label="Mobile Number*"
                    placeholder="Enter Mobile Number"
                    name="mobileNumber"
                    type="number"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.mobileNumber}
                  />
                  {props.touched.mobileNumber ? (
                    <small
                      className="errorForumber"
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "-10px",
                        left: "10px"
                      }}
                    >
                      {props.errors.mobileNumber}
                    </small>
                  ) : null}
                </div>
                <div
                  className="inputField"
                  style={{
                    width: "92%",
                    margin: "20px auto",
                    position: "relative"
                  }}
                >
                  <Input
                    label="Address*"
                    placeholder="Enter Your Address"
                    name="address"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.address}
                  />
                  {props.touched.address ? (
                    <small
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "-10px",
                        left: "10px"
                      }}
                    >
                      {props.errors.address}
                    </small>
                  ) : null}
                </div>
                <div
                  className="inputField"
                  style={{
                    width: "92%",
                    margin: "20px auto",
                    position: "relative"
                  }}
                >
                  <DropDown
                    name="field"
                    label="Field*"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.field}
                    errorSignal={props.touched.field}
                    errorMsg={props.errors.field}
                    menuItems={["CA", "CS", "B.COM"]}
                  />
                </div>
                <div
                  className="inputField"
                  style={{
                    width: "92%",
                    margin: "20px auto",
                    position: "relative"
                  }}
                >
                  <DropDown
                    name="level"
                    label="Level*"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.level}
                    errorSignal={props.touched.level}
                    errorMsg={props.errors.level}
                    menuItems={["Foundation", "Inter", "Final"]}
                  />
                </div>
                <div
                  className="inputField"
                  style={{
                    width: "92%",
                    margin: "20px auto",
                    position: "relative"
                  }}
                >
                  <DropDown
                    name="reference"
                    label="Reference*"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.reference}
                    errorSignal={props.touched.reference}
                    errorMsg={props.errors.reference}
                    menuItems={["Social Media", "Word of mouth", "Other"]}
                  />
                </div>
                <Button
                  type="submit"
                  onClick={onBtnClick}
                  variant="contained"
                  text="Register"
                  style={{
                    width: "20%",
                    marginLeft: "1.5rem"
                  }}
                />
              </form>
              <small style={{ color: "red" }}>{alert}</small>
            </div>
          </div>
        </div>
      )}
    </Formik>
  ) : (
    <OtpPage type="Register" values={formData} />
  );
};

export default Registration;

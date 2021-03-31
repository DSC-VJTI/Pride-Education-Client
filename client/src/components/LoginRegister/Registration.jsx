import React, { useState, useEffect } from "react";
import "./css/FormStyle.css";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Select,
  MenuItem
} from "@material-ui/core";
import * as yup from "yup";
import { Formik } from "formik";
import OtpPage from "./inputOTP";
import { sendOTP } from "../../actions/authActions";
import { useAuthState, useAuthDispatch } from "../../context/context";

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
        <div className="form">
          <div className="mainSection">
            <h1
              className="heading"
              style={{ color: "#0065d1", textAlign: "center" }}
            >
              Sign up for a free account
            </h1>
            <form onSubmit={props.handleSubmit}>
              <div
                className="inputFields"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <FormControl className="inputField" style={{ width: "40%" }}>
                  <InputLabel>Enter Full Name</InputLabel>
                  <Input
                    name="name"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                  />
                  {props.touched.name ? (
                    <small style={{ color: "red" }}>{props.errors.name}</small>
                  ) : null}
                </FormControl>
                <FormControl className="inputField" style={{ width: "40%" }}>
                  <InputLabel>Enter Email address</InputLabel>
                  <Input
                    name="email"
                    type="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                  />
                  {props.touched.email ? (
                    <small style={{ color: "red" }}>{props.errors.email}</small>
                  ) : null}
                </FormControl>
              </div>
              <div
                className="inputFields"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <FormControl className="inputField" style={{ width: "90%" }}>
                  <InputLabel>Enter Mobile Number</InputLabel>
                  <Input
                    name="mobileNumber"
                    type="number"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.mobileNumber}
                  />
                  {props.touched.mobileNumber ? (
                    <small style={{ color: "red" }}>
                      {props.errors.mobileNumber}
                    </small>
                  ) : null}
                </FormControl>
              </div>
              <div
                className="inputField"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <FormControl className="inputFields" style={{ width: "90%" }}>
                  <InputLabel>Enter your Address</InputLabel>
                  <Input
                    name="address"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.address}
                  />
                  {props.touched.address ? (
                    <small style={{ color: "red" }}>
                      {props.errors.address}
                    </small>
                  ) : null}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
                <FormControl
                  className="inputFields"
                  style={{ width: "40%", marginTop: "0.3rem" }}
                >
                  <InputLabel>Field</InputLabel>
                  <Select
                    name="field"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.field}
                  >
                    <MenuItem value={"CA"}>CA</MenuItem>
                    <MenuItem value={"CS"}>CS</MenuItem>
                    <MenuItem value={"B.COM"}>B.COM</MenuItem>
                  </Select>
                  {props.touched.field ? (
                    <small style={{ color: "red" }}>{props.errors.field}</small>
                  ) : null}
                </FormControl>
                <FormControl
                  className="inputFields"
                  style={{ width: "40%", marginTop: "0.3rem" }}
                >
                  <InputLabel>Level</InputLabel>
                  <Select
                    name="level"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.level}
                  >
                    <MenuItem value={"Foundation"}>Foundation</MenuItem>
                    <MenuItem value={"ICPC"}>ICPC</MenuItem>
                    <MenuItem value={"Final"}>Final</MenuItem>
                  </Select>
                  {props.touched.level ? (
                    <small style={{ color: "red" }}>{props.errors.level}</small>
                  ) : null}
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
                <FormControl
                  className="inputFields"
                  style={{ width: "90%", marginTop: "0.3rem" }}
                >
                  <InputLabel>Reference</InputLabel>
                  <Select
                    name="reference"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.reference}
                  >
                    <MenuItem value={"Social Media"}>
                      Through social media
                    </MenuItem>
                    <MenuItem value={"Word of mouth"}>
                      Through recommendation by friends/family
                    </MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                  {props.touched.reference ? (
                    <small style={{ color: "red" }}>
                      {props.errors.reference}
                    </small>
                  ) : null}
                </FormControl>
              </div>

              {/* Not removing date field as client might require this to be added */}

              {/* <div className="inputFieldsForDateAndBtn">
            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                name="date"
                className="datePicker inputFields"
                style={{ width: "40%", marginLeft: "2rem" }}
                id="date"
                label="Attempt Date"
                type="date"
                defaultValue="2017-05-24"
                // className={`${classes.textField}`}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.dateOfAttempt}
              />
              <small
                style={{
                  color: "red",
                  marginLeft: "2rem"
                }}
              >
                {props.errors.dateOfAttempt}
              </small>
            </div> */}
              <div className="">
                <Button
                  // onClick={onBtnClick}
                  className="submit_btn"
                  disabled={!(props.dirty && props.isValid)}
                  type="submit"
                  style={{
                    backgroundColor: " #455ff0",
                    width: "30%",
                    alignSelf: "center",
                    marginTop: "1.3rem",
                    marginLeft: "2rem"
                  }}
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </div>
              {/* </div> */}
            </form>
            <small style={{ color: "red" }}>{alert}</small>
          </div>
        </div>
      )}
    </Formik>
  ) : (
    <OtpPage type="Register" values={formData} />
  );
};

export default Registration;

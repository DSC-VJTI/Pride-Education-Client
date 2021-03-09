import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./css/FormStyle.css";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Registration = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [id, setID] = useState("");
  const [addr, setAddr] = useState("");
  const [suggestedBy, setSuggestedBy] = useState("");
  const [date, setDate] = useState("");
  //States Used for Validation Starts from Here
  const [warningNumber, setWarningNumber] = useState("");
  const [warningEmail, setWarningEmail] = useState("");
  const [warningName, setWarningName] = useState("");
  const [warningID, setWarningID] = useState("");
  const [warningAddr, setWarningAddr] = useState("");
  const [warningDate, setWarningDate] = useState("");
  const [warningSuggested, setWarningSuggestedBy] = useState("");
  const validateNumber = () => {
    if (number.length !== 10 || isNaN(number)) {
      setWarningNumber("Please enter a valid mobile number");
    }
    if (number.length === 10 && !isNaN(number)) {
      setWarningNumber("");
    }
  };
  const validateName = () => {
    if (name.length === 0) {
      setWarningName("Please enter your name");
    }
    if (name.length !== 0) {
      setWarningName("");
    }
  };
  const validateDate = () => {
    if (date === "") {
      setWarningDate("set attempt date");
    }
    if (date !== "") {
      setWarningDate("");
    }
  };
  const validateID = () => {
    if (id.length === 0) {
      setWarningID("Please enter  your Institute ID");
    }
    if (id.length !== 0) {
      setWarningID("");
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
  const validateAddr = () => {
    if (addr.length === 0) {
      setWarningAddr("Please enter your address");
    }
    if (addr.length !== 0) {
      setWarningAddr("");
    }
  };
  const validateSuggest = () => {
    if (suggestedBy.length === 0) {
      setWarningSuggestedBy("Please tell use who gave use our reference");
    }
    if (suggestedBy.length !== 0) {
      setWarningSuggestedBy("");
    }
  };
  const onBtnClick = (event) => {
    event.preventDefault();
    validateNumber();
    validateName();
    validateID();
    validateAddr();
    validateSuggest();
    validateDate();
    validateEmail();
  };
  const onRegistration = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "number") {
      setNumber(value);
    }
    if (name === "id") {
      setID(value);
    }
    if (name === "addr") {
      setAddr(value);
    }
    if (name === "suggestedBy") {
      setSuggestedBy(value);
    }
    if (name === "date") {
      setDate(value);
    }
  };
  return (
    <>
      <h1 class="heading" style={{ color: "#0065d1", textAlign: "center" }}>
        Sign up for a free account
      </h1>
      <div className="mainSection">
        <form>
          <div
            class="inputFields"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <FormControl className="inputField" style={{ width: "40%" }}>
              <InputLabel htmlFor="my-input">Enter Full Name</InputLabel>
              <Input
                name="name"
                value={name}
                onChange={onRegistration}
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <small style={{ color: "red" }}>{warningName}</small>
            </FormControl>
            <FormControl className="inputField" style={{ width: "40%" }}>
              <InputLabel htmlFor="my-input">Enter Email address</InputLabel>
              <Input
                name="email"
                value={email}
                onChange={onRegistration}
                type="email"
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <small style={{ color: "red" }}>{warningEmail}</small>
            </FormControl>
          </div>
          <div
            class="inputFields"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <FormControl className="inputField" style={{ width: "40%" }}>
              <InputLabel htmlFor="my-input">Enter Mobile Number</InputLabel>
              <Input
                name="number"
                value={number}
                onChange={onRegistration}
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <small style={{ color: "red" }}>{warningNumber}</small>
            </FormControl>
            <FormControl className="inputField" style={{ width: "40%" }}>
              <InputLabel htmlFor="my-input">Enter Institute ID</InputLabel>
              <Input
                name="id"
                value={id}
                onChange={onRegistration}
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <small style={{ color: "red" }}>{warningID}</small>
            </FormControl>
          </div>
          <div
            className="inputField"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <FormControl className="inputFields" style={{ width: "90%" }}>
              <InputLabel htmlFor="my-input">Enter your Address</InputLabel>
              <Input
                name="addr"
                value={addr}
                onChange={onRegistration}
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <small style={{ color: "red" }}>{warningAddr}</small>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <FormControl
              className="inputFields"
              style={{ width: "90%", marginTop: "0.3rem" }}
            >
              <InputLabel htmlFor="my-input">
                How did you come to know about us ?
              </InputLabel>
              <Input
                name="suggestedBy"
                value={suggestedBy}
                onChange={onRegistration}
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <small style={{ color: "red" }}>{warningSuggested}</small>
            </FormControl>
          </div>
          <div class="inputFieldsForDateAndBtn">
            <div
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                name="date"
                value={date}
                onChange={onRegistration}
                className="datePicker inputFields"
                style={{ width: "40%", marginLeft: "2rem" }}
                name="date"
                value={date}
                onChange={onRegistration}
                id="date"
                label="Attempt Date"
                type="date"
                defaultValue="2017-05-24"
                className={`${classes.textField}`}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <small
                style={{
                  color: "red",
                  marginLeft: "2rem",
                }}
              >
                {warningDate}
              </small>
            </div>
            <div className="">
              <Button
                onClick={onBtnClick}
                className="submit_btn"
                type="submit"
                style={{
                  backgroundColor: " #455ff0",
                  width: "30%",
                  alignSelf: "center",
                  marginTop: "1.3rem",
                  marginLeft: "2rem",
                }}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Registration;

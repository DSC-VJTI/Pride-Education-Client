import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./css/FormStyle.css";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Select,
  MenuItem
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Registration = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [addr, setAddr] = useState("");
  const [suggestedBy, setSuggestedBy] = useState("");
  const [date, setDate] = useState("");
  const [field, setField] = useState("");
  const [level, setLevel] = useState("");

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
  const validateEmail = () => {
    let pattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (pattern.test(email)) {
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
    // validateID();
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
    // if (name === "id") {
    //   setID(value);
    // }
    if (name === "addr") {
      setAddr(value);
    }
    if (name === "suggestedBy") {
      setSuggestedBy(value);
      console.log(value);
    }
    if (name === "date") {
      setDate(value);
    }
    if (name === "field") {
      setField(value);
    }
    if (name === "level") {
      setLevel(value);
    }
  };

  const onFormSubmit = () => {};
  return (
    <div className="form">
      <div className="mainSection">
        <h1
          className="heading"
          style={{ color: "#0065d1", textAlign: "center" }}
        >
          Sign up for a free account
        </h1>
        <form onSubmit={onFormSubmit}>
          <div
            className="inputFields"
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
            className="inputFields"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <FormControl className="inputField" style={{ width: "90%" }}>
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
              justifyContent: "space-around"
            }}
          >
            {/* <FormControl
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
            </FormControl> */}
            <FormControl
              className="inputFields"
              style={{ width: "40%", marginTop: "0.3rem" }}
            >
              <InputLabel>Field</InputLabel>
              <Select name="field" value={field} onChange={onRegistration}>
                <MenuItem value={"CA"}>CA</MenuItem>
                <MenuItem value={"CS"}>CS</MenuItem>
                <MenuItem value={"B.COM"}>B.COM</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              className="inputFields"
              style={{ width: "40%", marginTop: "0.3rem" }}
            >
              <InputLabel>Level</InputLabel>
              <Select name="level" value={level} onChange={onRegistration}>
                <MenuItem value={"Foundation"}>Foundation</MenuItem>
                <MenuItem value={"ICPC"}>ICPC</MenuItem>
                <MenuItem value={"Final"}>Final</MenuItem>
              </Select>
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
                name="suggestedBy"
                value={suggestedBy}
                onChange={onRegistration}
              >
                <MenuItem value={"Social Media"}>Through social media</MenuItem>
                <MenuItem value={"Word of mouth"}>
                  Through recommendation by friends/family
                </MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="inputFieldsForDateAndBtn">
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
                  shrink: true
                }}
              />
              <small
                style={{
                  color: "red",
                  marginLeft: "2rem"
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
                  marginLeft: "2rem"
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
    </div>
  );
};
export default Registration;

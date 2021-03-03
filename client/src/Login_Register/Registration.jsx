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
  const onRegistration = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name == "name") {
      setName(value);
    }
    if (name == "email") {
      setEmail(value);
    }
    if (name == "number") {
      setNumber(value);
    }
    if (name == "id") {
      setID(value);
    }
    if (name == "addr") {
      setAddr(value);
    }
    if (name == "suggestedBy") {
      setSuggestedBy(value);
    }
    if (name == "date") {
      setDate(value);
    }
  };
  return (
    <>
      <h1 class="heading" style={{ color: "#0065d1", textAlign: "center" }}>
        Sign up for a free account
      </h1>
      <div className="mainSection">
        <form method="post" action="">
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
                required
              />
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
                required
              />
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
                type="tel"
                id="my-input"
                aria-describedby="my-helper-text"
                required
              />
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
                required
              />
            </FormControl>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <FormControl className="inputField" style={{ width: "90%" }}>
              <InputLabel htmlFor="my-input">Enter your Address</InputLabel>
              <Input
                name="addr"
                value={addr}
                onChange={onRegistration}
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
                required
              />
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1rem",
            }}
          >
            <FormControl className="inputField" style={{ width: "90%" }}>
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
                required
              />
            </FormControl>
          </div>
          <div class="inputFieldsForDateAndBtn">
            <div className="">
              <TextField
                name="date"
                value={date}
                onChange={onRegistration}
                className="datePicker"
                style={{ width: "40%", marginLeft: "2rem", marginTop: "1rem" }}
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
                required
              />
            </div>
            <div className="">
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

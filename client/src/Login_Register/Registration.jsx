import React, { useDebugValue, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./css/FormStyle.css";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(1),
    width: 200,
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
      <h1 class="heading text-center" style={{ color: "#0065d1" }}>
        Sign up for a free account
      </h1>
      <div className="row">
        <div className="mainSection col-md-9 col-12">
          <form className="my-0">
            <div className="row">
              <div class="col-lg-5 col-sm-11  my-2  mx-auto">
                <input
                  name="name"
                  value={name}
                  onChange={onRegistration}
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Full Name"
                  required
                />
              </div>
              <div class="col-lg-5 col-sm-11 my-2 mx-auto ">
                <input
                  name="email"
                  value={email}
                  onChange={onRegistration}
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div class=" col-lg-5 col-sm-11 my-2   mx-auto ">
                <input
                  name="number"
                  value={number}
                  onChange={onRegistration}
                  type="tel"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>
              <div class="col-lg-5 col-sm-11 my-2  mx-auto ">
                <input
                  onChange={onRegistration}
                  name="id"
                  value={id}
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Institute ID"
                  required
                />
              </div>
              <div class="col-lg-11 col-sm-11 my-2  mx-auto ">
                <input
                  name="addr"
                  value={addr}
                  onChange={onRegistration}
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your Address"
                  required
                />
              </div>
              <div class="col-lg-11 col-sm-11 my-2   mx-auto ">
                <input
                  name="suggestedBy"
                  value={suggestedBy}
                  onChange={onRegistration}
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="How did you come to know about us?"
                  required
                />
              </div>
              <TextField
                name="date"
                value={date}
                onChange={onRegistration}
                id="date"
                label="Attempt Date"
                type="date"
                defaultValue="2017-05-24"
                className={`${classes.textField} my-3`}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <div className="row">
                <button
                  type="submit"
                  class="btn btn-primary col-3 my-md-2 mt-4 mx-auto"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Registration;

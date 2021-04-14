import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import { useForm, Form } from "../../../UI Elements/UseForm";
import { Input, MultiInput } from "../../../UI Elements/Input";
import Button from "../../../UI Elements/Button";
import axios from "axios";
import { BASE_URL } from "./../../../../constants";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#f1f1f1",
    marginLeft: "auto",
    marginRight: "auto",
    "& .MuiBox-root": {
      background: "#f1f1f1"
    },
    "@media (min-width: 576px)": {
      maxWidth: "94%",
      paddingLeft: "15px",
      paddingRight: "15px"
    },
    "@media (min-width: 1300px)": {
      width: "1250px"
    },
    "& h2": {
      fontSize: "2.8rem",
      lineHeight: "3rem",
      fontWeight: "600",
      marginTop: "2rem",
      fontFamily: "Abhaya Libre, Times New Roman, Times, serif",
      color: "#333840",
      letterSpacing: ".03rem",
      marginBottom: ".5rem"
    },
    "& h6": {
      fontSize: ".875rem",
      letterSpacing: "1px",
      fontFamily: `Work Sans,Roboto,-apple-system,
      BlinkMacSystemFont,Segoe UI,Arial,sans-serif`,
      color: "#333840",
      fontWeight: "400",
      lineHeight: "1.6"
    },
    "& select": {
      padding: ".5rem .75rem",
      lineHeight: "1.25",
      background: "transparent",
      border: "1px solid #979fa5",
      height: "2.5rem",
      paddingLeft: "1.2rem",
      width: "50%",
      maxWidth: "300px",
      fontSize: "15px",
      fontWeight: "300",
      color: "#333840",
      fontFamily: `Work Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Arial,
       sans-serif`,
      marginBottom: "0.5rem",
      marginTop: "0.5rem",
      "&:hover": {
        border: "1px solid #000"
      }
    }
  },
  adjustInputs: {
    margin: "2rem 0"
  }
}));

const initialFValues = {
  type: "product",
  mobileNumber: "",
  email: "",
  description: ""
};

const SoftwareProblems = () => {
  const classes = useStyles();
  const history = useHistory();
  const { values, setValues, handleInputChange, error, setError } = useForm(
    initialFValues
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/queries`, values)
      .then((response) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box className={classes.container}>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item lg={6} md={8} xs={12}>
            <div style={{ marginTop: "7vh" }}>
              <h6>SELECT THE TYPE OF QUERY YOU HAVE.</h6>
              <div className="select">
                <select name="type" id="type" onChange={handleInputChange}>
                  <option value="product">Product Inquiry</option>
                  <option value="software">Software Problems</option>
                </select>
              </div>
              <h2>Can you provide some more information?</h2>
              <h6>We might contact you either through WhatsApp or Email</h6>
              <div className={classes.adjustInputs}>
                <Input
                  label={`WhatsApp No. *`}
                  name="mobileNumber"
                  placeholder="WhatsApp No."
                  value={values.mobileNumber}
                  onChange={handleInputChange}
                  error={error.mobileNumber}
                  required={true}
                  type="number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid phone number"
                />
                <Input
                  label="Email ID *"
                  name="email"
                  placeholder="Email ID"
                  value={values.email}
                  onChange={handleInputChange}
                  error={error.email}
                  required={true}
                  type="text"
                  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]*$"
                  title="Please input a valid email"
                />
                <MultiInput
                  label="Leave your message *"
                  placeholder="Describe your Problem in detail"
                  name="description"
                  value={values.description}
                  onChange={handleInputChange}
                  type="string"
                  required={true}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  text="submit"
                  type="submit"
                  style={{ borderRadius: "99999px" }}
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={4} xs={false}></Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default SoftwareProblems;

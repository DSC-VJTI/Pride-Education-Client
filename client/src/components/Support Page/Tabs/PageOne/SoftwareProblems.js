import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import { useForm, Form } from "../../../UI Elements/UseForm";
import { Input, MultiInput } from "../../../UI Elements/Input";
import Button from "../../../UI Elements/Button";
// import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#f1f1f1",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (min-width: 576px)": {
      maxWidth: "94%",
      paddingLeft: "15px",
      paddingRight: "15px"
      // background: 'blue'
    },
    "@media (min-width: 1300px)": {
      width: "1250px"
      // background: 'yellow'
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
    }
  },
  adjustInputs: {
    margin: "2rem 0"
  }
}));

const initialFValues = {
  mobile: "",
  whatsapp: "",
  email: "",
  query: ""
};

const SoftwareProblems = () => {
  const classes = useStyles();
  const { values, setValues, handleInputChange, error, setError } = useForm(
    initialFValues
  );

  const validate = () => {
    let temp = {};
    temp.mobile = values.mobile.length > 9 ? "" : "Enter a valid number";
    temp.whatsapp = values.whatsapp.length > 9 ? "" : "Enter a valid number";
    temp.email = /$^|.*@.*..*/.test(values.email) ? "" : "Email is not valid";
    temp.query = values.query ? "" : "This field is required";
    setError({
      ...temp
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <Box className={classes.container}>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item lg={6} md={8} xs={12}>
            <div style={{ marginTop: "7vh" }}>
              <h6>FACING BUGS IN THE SOFTWARE?</h6>
              <h2>Can you provide some more information?</h2>
              <h6>We might contact you either through WhatsApp or Email</h6>
              <div className={classes.adjustInputs}>
                {/* <Input
            label="Mobile No."
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={error.mobile}
          /> */}
                <Input
                  label={`WhatsApp No. *`}
                  name="whatsapp"
                  placeholder="WhatsApp No."
                  value={values.whatsapp}
                  onChange={handleInputChange}
                  error={error.whatsapp}
                  required="true"
                  type="tel"
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
                  required="true"
                  type="text"
                  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]*$"
                  title="Please input a valid email"
                />
                <MultiInput
                  label="Leave your message *"
                  placeholder="Describe your Problem in detail"
                  name="query"
                  value={values.query}
                  onChange={handleInputChange}
                  type="string"
                  required="true"
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
          <Grid item lg={6} md={4} xs={0}></Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default SoftwareProblems;

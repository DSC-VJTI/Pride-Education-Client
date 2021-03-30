import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
import { useForm, Form } from "../../../UI Elements/UseForm";
import Button from "../../../UI Elements/Button";
import { DatePicker, AppointedTime } from "../../../UI Elements/DatePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& .MuiBox-root": {
    //   marginTop: "153px"
    // },
    // "& .MuiButton-root": {
    //   borderRadius: "99999px"
    // }
  },
  container: {
    background: "#f1f1f1",
    marginLeft: "auto",
    marginRight: "auto",
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
    }
  }
}));

const initialFValues = {
  pickedDate: new Date(),
  pickedTime: new Date()
};

const PersonalDiscussion = () => {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item lg={6} md={8} xs={12}>
            <DatePicker
              name="pickedDate"
              label="Appointment Date"
              value={values.pickedDate}
              onChange={handleInputChange}
            />
            <AppointedTime
              name="pickedTime"
              label="Appointment Time"
              value={values.pickedTime}
              onChange={handleInputChange}
            />
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                text="submit"
                type="submit"
              />
            </div>
          </Grid>
          <Grid item lg={6} md={4} false={0}></Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default PersonalDiscussion;

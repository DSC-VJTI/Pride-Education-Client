import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useForm, Form } from "../../../UI Elements/UseForm";
import Button from "../../../UI Elements/Button";
import { DatePicker, AppointedTime } from "../../../UI Elements/DatePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBox-root": {
      marginTop: "153px"
    },
    "& .MuiButton-root": {
      borderRadius: "99999px"
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
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item md={2} xs={0}></Grid>
        <Grid item md={4} xs={12}>
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
        <Grid item md={6} xs={0}></Grid>
      </Grid>
    </Form>
  );
};

export default PersonalDiscussion;

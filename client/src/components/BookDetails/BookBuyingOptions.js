import React from "react";
import {
  makeStyles,
  Grid,
  FormControl,
  MenuItem,
  Select,
  InputLabel
} from "@material-ui/core";

const TestBuyingOptionsStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const TestBuyingOptions = () => {
  const classes = TestBuyingOptionsStyles();
  const [CourseType, setCourseType] = React.useState("");
  const [Language, setLanguage] = React.useState("");
  const [Validity, setValidity] = React.useState("");
  const [Mode, setMode] = React.useState("");

  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleValidityChange = (event) => {
    setValidity(event.target.value);
  };
  const handleModeChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <div>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Mode</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Mode}
              onChange={handleModeChange}
            >
              <MenuItem value={10}>Pendrive</MenuItem>
              <MenuItem value={20}>Google Drive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">CourseType</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={CourseType}
              onChange={handleCourseTypeChange}
            >
              <MenuItem value={10}>Full Course</MenuItem>
              <MenuItem value={20}>Fast Track Course</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Language}
              onChange={handleLanguageChange}
            >
              <MenuItem value={10}>Hindi</MenuItem>
              <MenuItem value={20}>English</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Validity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Validity}
              onChange={handleValidityChange}
            >
              <MenuItem value={10}>7 Months</MenuItem>
              <MenuItem value={20}>12 Months</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default TestBuyingOptions;

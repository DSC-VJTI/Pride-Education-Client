import React from "react";

import {
  TextField,
  Typography,
  makeStyles,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";

const ComboBoxStyles = makeStyles((theme) => ({
  ClassesBox: {
    background: "#f1f1f1",
    width: "80vw",
    padding: "1vw 1vh",
    borderRadius: "1rem 0",
    margin: "2vh 5%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  searchBox: {
    margin: theme.spacing(1),
    minWidth: 120,
    background: "#f1f1f1",
    width: "fit-content",
    borderRadius: "8px",
    margin: "auto"
  },
  title: {
    margin: "auto",
    color: "#f26522",
    fontWeight: "800"
  },
  option: {
    background: "#E7E7E7",
    color: "#f26522",
    fontWeight: "bold",
    margin: "2px"
  }
}));

const ComboBox = ({ course, CoursesList }) => {
  const [courses, setCourses] = React.useState("");
  const classes = ComboBoxStyles();
  const handleChange = (event) => {
    setCourses(event.target.value);
  };
  return (
    <div className={classes.ClassesBox}>
      <Typography className={classes.title}>{course}</Typography>
      <FormControl className={classes.searchBox}>
        <InputLabel htmlFor="age-native-helper">Instructor</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={courses}
          onChange={handleChange}
          style={{
            width: "10rem"
          }}
        >
          {CoursesList.map((option) => (
            <MenuItem value={option.value} className={classes.option}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ComboBox;

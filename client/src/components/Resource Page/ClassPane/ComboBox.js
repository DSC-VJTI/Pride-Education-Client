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

// import { keyframes } from "styled-components";

// const  blinker =keyframes`
//   0%{color:} 25%{color:} 50%{color:} 75%{color:}
//  `//

const ComboBoxStyles = makeStyles((theme) => ({
  ClassesBox: {
    background: "#3f51b5",
    width: "40vw",
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
    background: "#e3f2fd",
    width: "fit-content",
    borderRadius: "8px",
    margin: "auto"
  },
  title: {
    margin: "auto",
    color: "#ffffff",
    fontWeight: "800"
  },
  option: {
    background: "#E7E7E7",
    color: "#311b92",
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

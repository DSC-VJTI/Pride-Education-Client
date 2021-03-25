import React from "react";

import { TextField, Typography, makeStyles } from "@material-ui/core";

// import { keyframes } from "styled-components";

// const  blinker =keyframes`
//   0%{color:} 25%{color:} 50%{color:} 75%{color:}
//  `//

const ComboBoxStyles = makeStyles({
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
    background: "#e3f2fd",
    width: "fit-content",
    borderRadius: "8px",
    margin: "auto"
  },
  title: {
    margin: "auto",
    color: "#ffffff",
    fontWeight: "800"
  }
});

const ComboBox = ({ course, CoursesList }) => {
  const [courses, setCourses] = React.useState("");
  const classes = ComboBoxStyles();
  const handleChange = (event) => {
    setCourses(event.target.value);
  };
  return (
    <div className={classes.ClassesBox}>
      <Typography className={classes.title}>{course}</Typography>
      <TextField
        select
        label="Instructor"
        value={courses}
        onChange={handleChange}
        SelectProps={{
          native: true
        }}
        className={classes.searchBox}
      >
        {CoursesList.map((option) => (
          <option
            key={option.value}
            value={option.value}
            style={{
              width: "5rem"
            }}
          >
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
};

export default ComboBox;

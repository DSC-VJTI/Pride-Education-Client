import React from 'react';

import {
    TextField,
    Typography, 
    makeStyles
  } from "@material-ui/core";

// import { keyframes } from "styled-components";

// const  blinker =keyframes`
//   0%{color:} 25%{color:} 50%{color:} 75%{color:}
//  `//  


const ComboBoxStyles = makeStyles({
  ClassesBox: {
    background: "#90caf9",
    width: "20rem",
    padding: "10px",
    borderRadius: "1rem 0",
    margin: "15px 5%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  searchBox: {
    background: "#e3f2fd",
    width: "fit-content",
    borderRadius: "8px",
  },
  title: {
    margin: "10px",
    color: "#283593",
    fontWeight: "800",
    width: "fit-content"
  },
});


const ComboBox = ({course, CoursesList}) => {
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
                width:"5rem"
              }}
            >
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    );
  }

export default ComboBox;
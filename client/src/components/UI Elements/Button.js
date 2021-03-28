import React, { useState } from "react";
import { Box, Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    "& .MuiButton-root": {
      // fontFamily: "Work Sans, Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif",
      // boxSizing: 'border-box',
      padding: ".75rem 1.5rem",
      borderRadius: "2.2rem",
      fontSize: "0.675rem",
      fontWeight: "normal",
      textAlign: "center",
      marginTop: "2rem",
      marginBottom: "1rem",
      background: "#f26522",
      color: "white",
      border: "1px solid #f26522",
      lineHeight: "1.25",

      "&:hover": {
        boxSizing: "border-box",
        background: "#f1f1f1",
        color: "#f26522",
        border: "1px solid #f26522"
      }
    }
  }
}));

export const Button = (props) => {
  const classes = useStyles();
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <Box className={classes.root}>
      <MuiButton
        variant={variant}
        size={size}
        // color={"#f26522"}
        onClick={onClick}
        disableElevation
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        className={classes.root}
        {...other}
      >
        {text}
      </MuiButton>
      {/* <a className={classes.root}>{text}</a> */}
    </Box>
  );
};

export default Button;

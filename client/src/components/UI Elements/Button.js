import React, { useState } from "react";
import { Box, Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& .MuiButton-root": {
      // fontFamily: "Work Sans, Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif",
      // boxSizing: 'border-box',
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "10px",
      background: "#f26522",
      color: "white",
      border: "1px solid #f26522",
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

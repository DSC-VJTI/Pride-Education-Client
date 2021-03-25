import React from "react";
import { Box, Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& .MuiButton-root": {
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "10px"
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
        color={color}
        onClick={onClick}
        className={classes.root}
        {...other}
      >
        {text}
      </MuiButton>
    </Box>
  );
};

export default Button;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      backgroundColor: "#f1f1f1",
      width: "100%",
      margin: theme.spacing(1)
    }
  }
}));

export const useForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);
  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
    error,
    setError
  };
};

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}

import { TextField, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary,
    marginBottom: "0.5rem",
    textAlign: "left",
    "& input": {
      // display: 'block',
      padding: ".5rem .75rem",
      lineHeight: "1.25",
      background: "transparent",
      border: "1px solid #979fa5",
      borderRadius: "2.2rem",
      height: "2.5rem",
      paddingLeft: "1.2rem",
      width: "100%",
      fontSize: "15px",
      fontWeight: "300",
      color: "#333840",
      fontFamily: `Work Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Arial,
       sans-serif`,
      marginBottom: "0.5rem",
      "&:hover": {
        border: "1px solid #000"
      }
    },
    "& textarea": {
      // display: 'block',
      padding: ".5rem .75rem",
      lineHeight: "1.25",
      background: "transparent",
      border: "1px solid #979fa5",
      borderRadius: "0.5rem",
      height: "10rem",
      paddingLeft: "1.2rem",
      width: "100%",
      fontSize: "15px",
      fontWeight: "300",
      color: "#333840",
      fontFamily: `Work Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Arial,
       sans-serif`,
      marginBottom: "0.5rem",
      "&:hover": {
        border: "1px solid #000"
      }
    },
    "& label": {
      display: "inline-block",
      color: "#55595c",
      marginBottom: ".5rem",
      fontSize: "13px",
      lineHeight: "1.5",
      fontFamily: `Work Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Arial,
       sans-serif`
    }

    // '& .MuiFormLabel-root .Mui-focued': {
    //   border: '1px solid black',
    //   color: 'red',
    //   background: 'red'
    // }
  }
}));

export const Input = (props) => {
  const classes = useStyles();
  const {
    label,
    name,
    value,
    type,
    required,
    pattern,
    title,
    onChange,
    placeholder
  } = props;
  return (
    // <TextField
    //   //
    //   // InputLabelProps={classes.root}
    //   inputProps={classes.root}
    //   label={label}
    //   name={name}
    //   value={value}
    //   onChange={onChange}
    //   {...(error && { error: true, helperText: error })}
    // />
    <div className={classes.root}>
      <label for="hire_full_name">{`${label}`}</label>
      <input
        id="hire_full_name"
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
      />
    </div>
  );
};

export const MultiInput = (props) => {
  const classes = useStyles();
  const { label, name, value, onChange, type, required, placeholder } = props;
  return (
    // <TextField
    //   multiline
    //   rowsMax={5}
    //   label={label}
    //   name={name}
    //   value={value}
    //   onChange={onChange}
    //   // {...(error && { error: true, helperText: error })}
    // />
    <div className={classes.root}>
      <label for="hire_full_name">{`${label}`}</label>
      <textarea
        id="hire_full_name"
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

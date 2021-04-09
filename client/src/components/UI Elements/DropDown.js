import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary,
    marginBottom: "0.5rem",
    textAlign: "left",
    "& select": {
      // display: 'block',
      flex: 1,
      padding: ".5rem .15rem",
      lineHeight: "1.25",
      background: "transparent",
      border: "1px solid #979fa5",
      borderRadius: "1rem",
      height: "2.5rem",
      paddingLeft: "1.2rem",
      width: "100%",
      margin: "12px auto",
      fontSize: "15px",
      fontWeight: "300",
      color: "#333840",
      fontFamily: `Work Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Arial,
       sans-serif`,
      // marginBottom: "0.5rem",
      "&:hover": {
        border: "1px solid #000"
      }
    },
    "& label": {
      display: "inline-block",
      color: "#55595c",
      marginBottom: "0rem",
      marginLeft: "1rem",
      fontSize: "13px",
      lineHeight: "1.5",
      fontFamily: `Work Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Arial,
       sans-serif`
    }
  }
}));
export const DropDown = (props) => {
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
    placeholder,
    onBlur,
    errorSignal,
    errorMsg,
    menuItems
  } = props;
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className={classes.root}
    >
      <label htmlFor={name}>{`${label}`}</label>
      <select
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        onBlur={onBlur}
      >
        <option default>Enter your {name}</option>
        {menuItems.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      {errorSignal ? (
        <small
          style={{
            color: "red",
            position: "absolute",
            bottom: "-4px",
            left: "10px"
          }}
        >
          {errorMsg}
        </small>
      ) : null}
    </div>
  );
};

import { makeStyles } from "@material-ui/core";
import React from "react";
import Button from "../UI Elements/Button";

const useStyles = makeStyles({
  root: {
    "& .MuiBox-root": {
      justifyContent: "center",
      background: "#e7e7e7",
      paddingTop: "6vw",
      paddingBottom: "6vw"
    },
    "& .MuiButton-root": {
      fontSize: "1.5rem",
      border: "1px solid black",
      color: "white",
      background: "#fbb821",
      "&:hover": {
        boxSizing: "border-box",
        background: "none",
        color: "black",
        border: "1px solid black"
      }
    }
  }
});
const Explore = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        text="Explore MarketPlace"
        variant="outlined"
        size="large"
      ></Button>
    </div>
  );
};

export default Explore;

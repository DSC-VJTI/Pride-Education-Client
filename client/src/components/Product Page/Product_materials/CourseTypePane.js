import React from "react";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import CourseContents from "./CourseContents";

const mainPaneStyles = makeStyles({
  mainHolder: {
    display: "flex",
    flexWrap: "wrap",
    // background: "#90caf9",
    background: "#42a5f4",
    width: "80%",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "3px 3px #3949ab"
  },
  CourseType: {
    background: "#3949ab",
    width: "50%",
    margin: "20px auto",
    padding: "10px",
    borderRadius: "50px",
    fontWeight: "500",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    color: "white",
    boxShadow: "3px 3px #1c87e5"
  }
});

const CourseTypePane = ({ Course, CourseContent }) => {
  const classes = mainPaneStyles();
  return (
    <div>
      <div>
        <h2 className={classes.CourseType}>{Course}</h2>
      </div>
      <div className={classes.mainHolder}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
          controls
          maxWidth="550px"
          playsinline
          style={{
            margin: "20px"
          }}
        />
        <CourseContents Content={CourseContent} />
      </div>
    </div>
  );
};

export default CourseTypePane;

import React from "react";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import CourseContents from "./CourseContents";

const mainPaneStyles = makeStyles({
  mainHolder: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    margin: "auto"
  },
  CourseType: {
    background: "#f1f1f1",
    width: "50%",
    margin: "20px auto",
    padding: "10px",
    borderRadius: "50px",
    fontWeight: "500",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    color: "#f26522"
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

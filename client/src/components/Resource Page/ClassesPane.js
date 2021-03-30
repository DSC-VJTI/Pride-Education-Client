import React from "react";
import ClassPane from "./ClassPane/ClassPane";
import { makeStyles } from "@material-ui/core";

const ClassesPaneStyles = makeStyles({
  root: {
    margin: "auto",
    padding: "2% 5%",
    boxSizing: "border-box",
    background: "#ffffff"
  }
});

export default function ClassesPane() {
  // const t = [
  //   { title: "SCMPE" },
  //   { title: "FINANCIAL REPORTING" },
  //   { title: "SFM" },
  //   { title: "LAW" },
  //   { title: "FOUNDATION" },
  //   { title: "INTERMEDIATE" },
  //   { title: "FINAL" },
  //   { title: "AUDIT" }
  // ];
  // const CoursesList = [
  //   { value: "1", label: "Abhishek Khilwani" },
  //   { value: "1", label: "Abhishek Khilwani" },
  //   { value: "1", label: "Abhishek Khilwani" },
  //   { value: "1", label: "Abhishek Khilwani" },
  //   { value: "1", label: "Abhishek Khilwani" },
  //   { value: "1", label: "Abhishek Khilwani" }
  // ];

  const classes = ClassesPaneStyles();
  return (
    <div className={classes.root}>
      <ClassPane />
    </div>
  );
}

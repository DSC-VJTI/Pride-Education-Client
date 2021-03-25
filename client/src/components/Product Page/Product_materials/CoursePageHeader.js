import React from "react";
import { makeStyles } from "@material-ui/core";
import img1 from "../../../assets/images/resourceImages/img1.jpeg";

const CoursePageHeaderStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "10px 10%",
    // background: "#90caf9",
    background: "#f1f1f1",
    borderRadius: "20px",
    // boxShadow: "4px 4px ",
    padding: "20px 0px"
  },
  instructImg: {
    width: "250px",
    margin: "auto"
  },
  Desc: {
    display: "inline-block",
    width: "50%",
    fontWeight: "400",
    margin: "auto",
    // color: "#f26522",
    fontWeight: "600"
  }
});

function CoursePageHeader() {
  const classes = CoursePageHeaderStyles();
  return (
    <div className={classes.root}>
      <div className={classes.Desc}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia eatae
          harum quis sunt repellat aspernatur fugit earum minima corrupti uidem
          sequi explicabo quia laborum repellendus, tempore laboriosam, tempora,
          id vitae?
        </p>
      </div>
      <img src={img1} className={classes.instructImg} alt="Instructor" />
    </div>
  );
}
export default CoursePageHeader;

import React from "react";
import CoursePageHeader from "./Product_materials/CoursePageHeader";
import CourseTypePane from "./Product_materials/CourseTypePane";
import { makeStyles } from "@material-ui/core";

const CoursePageStyles = makeStyles({
  root: {
    // background: "#42a5f4",
    // background: "white",
    margin: "0px",
    padding: "2% 5%"
  }
});

function CoursePage() {
  const TypeList = [
    {
      title: "FULL COURSE",
      courseList: [
        { id: 1, Material: "Question Bank" },
        { id: 2, Material: "Hand Written Answer Book" },
        { id: 3, Material: "Master Stroke Book" },
        { id: 4, Material: "Love Charts" }
      ]
    },
    {
      title: " FAST TRACK ",
      courseList: [
        { id: 1, Material: "Question Bank" },
        { id: 2, Material: "Hand Written Answer Book" },
        { id: 3, Material: "Master Stroke Book" },
        { id: 4, Material: "Love Charts" }
      ]
    },
    {
      title: " BOOSTER ",
      courseList: [
        { id: 1, Material: "Question Bank" },
        { id: 2, Material: "Hand Written Answer Book" },
        { id: 3, Material: "Master Stroke Book" },
        { id: 4, Material: "Love Charts" }
      ]
    },
    {
      title: "CHAPTER WISE CLASSES",
      courseList: [
        { id: 1, Material: "Question Bank" },
        { id: 2, Material: "Hand Written Answer Book" },
        { id: 3, Material: "Master Stroke Book" },
        { id: 4, Material: "Love Charts" }
      ]
    }
  ];

  const classes = CoursePageStyles();
  return (
    <div className={classes.root}>
      <div data-aos="fade-right">
        <CoursePageHeader />
      </div>
      {TypeList.map((type) => (
        <div data-aos="zoom-in-up">
          <CourseTypePane Course={type.title} CourseContent={type.courseList} />
        </div>
      ))}
    </div>
  );
}
export default CoursePage;

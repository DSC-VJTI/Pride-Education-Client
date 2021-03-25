import React from "react";
import { makeStyles } from "@material-ui/core";
import ReactElasticCarousel from "react-elastic-carousel/dist/index";
import Product from "./Product";
import ComboBox from "./ComboBox";

const ClassPaneStyles = makeStyles({
  slider: {
    backgroundColor: "#3f51b5",
    padding: "2rem",
    width: "90vw",
    margin: "auto",
    boxSizing: "border-box",
    borderRadius: "1rem",
    boxShadow: "0.1rem 0.1rem #1565c0"
  }
});

const ClassPane = ({ Course, CoursesList }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1100, itemsToShow: 4 }
  ];
  const classes = ClassPaneStyles();
  return (
    <div>
      <div data-aos="fade-left">
        <ComboBox course={Course} CoursesList={CoursesList} />
      </div>
      <div data-aos="fade-up">
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {CoursesList.map(() => (
            <div data-aos="flip-right">
              <Product></Product>
            </div>
          ))}
        </ReactElasticCarousel>
      </div>
    </div>
  );
};

export default ClassPane;

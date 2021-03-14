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
      <ComboBox course={Course} CoursesList={CoursesList} />
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {CoursesList.map(() => (
            <Product></Product>
          ))}
        </ReactElasticCarousel>
    </div>
  );
};

export default ClassPane;

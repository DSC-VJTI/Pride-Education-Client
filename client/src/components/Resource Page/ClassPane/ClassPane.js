import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import ReactElasticCarousel from "react-elastic-carousel/dist/index";
import Product from "./Product";
import ComboBox from "./ComboBox";

const ClassPaneStyles = makeStyles((theme) => ({
  slider: {
    padding: "2rem",
    width: "90vw",
    margin: "auto",
    borderRadius: "1rem",
    "& .rec-dot": {
      display: "none"
    },
    "& .rec-dot:hover ": {
      boxShadow: "0 0 1px 3px"
    },
    "& .rec-dot:active": {
      boxShadow: "0 0 1px 3px rgba(235,16,16,0.5)"
    },
    "& .rec-dot:focus": {
      boxShadow: "0 0 1px 3px rgba(235,16,16,0.5)"
    },
    "& .rec-arrow": {
      background: "none"
    },
    "& .rec.rec-arrow:hover": {
      background: "#f26522"
    }
  }
}));

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

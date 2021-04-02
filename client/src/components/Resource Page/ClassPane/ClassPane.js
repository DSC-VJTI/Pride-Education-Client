import React, { useEffect, useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import ReactElasticCarousel from "react-elastic-carousel/dist/index";
import Product from "./Product";
import ComboBox from "./ComboBox";
import axios from "axios";
import { BASE_URL } from "../../../constants";
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1100, itemsToShow: 3 }
  ];
  const classes = ClassPaneStyles();
  const getProducts = async () => {
    const innerProduct = await axios.get(`${BASE_URL}/products`);

    setProducts(innerProduct.data.data);
  };

  return (
    <section>
      <ComboBox title="test series" />
      <div>
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {products.map((prod) => {
            if ("test" in prod) {
              return (
                <div data-aos="flip-right">
                  <Product
                    title={prod.name}
                    instructor={prod.test.subject}
                    buttonText="View Book"
                  />
                </div>
              );
            }
          })}
        </ReactElasticCarousel>
      </div>
      <ComboBox title="courses" />
      <div>
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {products.map((prod) => {
            if ("course" in prod) {
              return (
                <div data-aos="flip-right">
                  <Product
                    title={prod.name}
                    instructor={prod.course.faculty}
                    buttonText="View Course"
                  />
                </div>
              );
            }
          })}
        </ReactElasticCarousel>
      </div>
      <ComboBox title="books" />
      <div>
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {products.map((prod) => {
            if ("book" in prod) {
              return (
                <div data-aos="flip-right">
                  <Product title={prod.name} buttonText="View Book" />
                </div>
              );
            }
          })}
        </ReactElasticCarousel>
      </div>
    </section>
  );
};

export default ClassPane;

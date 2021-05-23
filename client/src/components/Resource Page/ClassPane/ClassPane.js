import React, { useEffect, useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import ReactElasticCarousel from "react-elastic-carousel/dist/index";
import Product from "./Product";
import ComboBox from "./ComboBox";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import Loading from "../../UI Elements/Loading";

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
    },
    "& h2": {
      fontSize: "2.8rem",
      lineHeight: "3rem",
      fontWeight: "600",
      marginTop: "2rem",
      color: "#333840",
      letterSpacing: ".03rem",
      marginBottom: ".5rem"
    },
    h6: {},
    select: {}
  },
  adjustInputs: {
    margin: "2rem 0"
  }
}));

const ClassPane = () => {
  const [products, setProducts] = useState({
    tests: [],
    books: [],
    courses: []
  });
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subject, setSubject] = useState("CA");

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 900, itemsToShow: 1 },
    { width: 1100, itemsToShow: 2 }
  ];

  const classes = ClassPaneStyles();

  const getProducts = async () => {
    const innerProduct = await axios.get(`${BASE_URL}/products`);
    const allProducts = innerProduct.data.data;

    let tests = [],
      courses = [],
      books = [],
      uniqueSubjects = [];

    allProducts.map((prod) => {
      if ("test" in prod) tests.push(prod);
      else if ("course" in prod && prod.course.level.includes(subject)) {
        if (!uniqueSubjects.includes(prod.course.subject))
          uniqueSubjects.push(prod.course.subject);
        courses.push(prod);
      } else if ("book" in prod) books.push(prod);
    });

    setProducts({
      courses: courses,
      tests: tests,
      books: books
    });

    setSubjects(uniqueSubjects);
    setIsLoading(false);
  };

  const onInputChange = (event) => {
    setSubject(event.target.value);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <section>
      <h6
        style={{
          fontSize: ".875rem",
          letterSpacing: "1px",
          color: "#333840",
          fontWeight: "400",
          lineHeight: "1.6"
        }}
      >
        Course
      </h6>
      <div className="select">
        <select
          name="type"
          id="type"
          onChange={onInputChange}
          style={{
            padding: ".5rem .75rem",
            lineHeight: "1.25",
            background: "transparent",
            border: "1px solid #979fa5",
            height: "2.5rem",
            paddingLeft: "1.2rem",
            width: "50%",
            maxWidth: "300px",
            fontSize: "15px",
            fontWeight: "300",
            color: "#333840",
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            "&:hover": {
              border: "1px solid #000"
            }
          }}
        >
          <option value="CA">CA</option>
          <option value="CA Final">CA Final</option>
        </select>
      </div>
      <ComboBox title="PEN DRIVE/GOOGLE DRIVE CLASSES" />
      <div>
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {subjects.map((prod, idx) => {
            return (
              <div key={idx} data-aos="flip-right">
                <Product
                  title={prod}
                  instructor="Abhishek Khilwani"
                  buttonText="View Course"
                  obj={prod}
                  rou="/course/details"
                  type="course"
                />
              </div>
            );
          })}
        </ReactElasticCarousel>
      </div>
      <ComboBox title="BOOKS" />
      <div>
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {products.books.map((prod, idx) => {
            return (
              <div key={idx} data-aos="flip-right">
                <Product
                  title={prod.name}
                  buttonText="View Book"
                  obj={prod}
                  rou="/book/details"
                />
              </div>
            );
          })}
        </ReactElasticCarousel>
      </div>
      <ComboBox title="TEST SERIES" />
      <div>
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {products.tests.map((prod, idx) => {
            return (
              <div key={idx} data-aos="flip-right">
                <Product
                  title={prod.name}
                  instructor={prod.test.subject}
                  buttonText="View Test"
                  obj={prod}
                  rou="/test/details"
                />
              </div>
            );
          })}
        </ReactElasticCarousel>
      </div>
    </section>
  );
};

export default ClassPane;

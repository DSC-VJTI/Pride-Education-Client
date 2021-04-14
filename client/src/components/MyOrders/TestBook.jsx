import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import OrderedItem from "./OrderedItem";
const TestBook = (props) => {
  useEffect(() => {
    console.log(props.checkTest.products);
  }, []);
  return props.checkTest.products.map((product) => {
    if (product.course !== undefined) {
      return (
        <Paper
          className="orderPageResponsive"
          style={{
            backgroundColor: "rgb(241, 241, 241)",
            width: "60%",
            display: "block",
            margin: "100px 0!important"
          }}
        >
          <OrderedItem
            title={`${product.course.subject} Full Course`}
            price={product.price}
            buyDate={product.course.applicableExamDate}
            instructor={product.course.faculty}
          />
        </Paper>
      );
    } else if (product.test !== undefined) {
      return (
        <Paper
          className="orderPageResponsive"
          style={{
            backgroundColor: "rgb(241, 241, 241)",
            width: "60%",
            display: "block",
            margin: "100px 0!important"
          }}
        >
          <OrderedItem
            title={`${product.test.subject} Full Course`}
            price={product.price}
            //   buyDate={product.course.applicableExamDate}
            instructor={product.name}
          />
        </Paper>
      );
    } else {
      return null;
    }
  });
};

export default TestBook;

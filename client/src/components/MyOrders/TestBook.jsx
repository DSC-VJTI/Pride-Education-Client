import React from "react";
import { Paper } from "@material-ui/core";
import OrderedItem from "./OrderedItem";
const TestBook = (props) => {
  return props.checkTest.products.map((product) => {
    if (product.course !== undefined) {
      return (
        <Paper
          className="orderPageResponsive"
          style={{
            backgroundColor: "rgb(241, 241, 241)",
            maxWidth: 300
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
            maxWidth: 300
          }}
        >
          <OrderedItem
            title={`${product.test.subject} Full Course`}
            price={product.price}
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

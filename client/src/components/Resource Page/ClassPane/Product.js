import React from "react";
import { Card, CardHeader, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import img1 from "../../../Resources/img1.jpeg";

const ProductStyles = makeStyles({
  classHolder: {
    border: "30px solid #3949ab",
    borderRadius: "0px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  CardImage: {
    width: "200px",
    margin: "auto"
  },
  classButton: {
    backgroundColor: "#311b92",
    color: "white",
    fontWeight: "500",
    margin: "8%",
    padding: "4% 10%",
    boxSizing: "border-box"
  },
  CardHeader: {
    fontWeight: "bold",
    margin: "auto",
    color: "blue"
  }
});


function Product() {
  var classes = ProductStyles();

  return (
    <Card className={classes.classHolder}>
      <img src={img1} className={classes.CardImage} alt="Instructor" />
      <CardHeader
        title="Abhishek Khilwani"
        subheader="Head of the SCMPREM"
      />
      <Button className={classes.classButton}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/product">
          Go to the Course Page
        </Link>
      </Button>
    </Card>
  );
}

export default Product;

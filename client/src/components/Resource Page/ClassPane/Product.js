import React from "react";
import {
  Card,
  CardHeader,
  Button,
  makeStyles,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/resourceImages/img1.jpeg";

const ProductStyles = makeStyles({
  classHolder: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "1rem",
    margin: "2px 0px"
  },
  CardImage: {
    width: "200px",
    maxWidth: "30vw",
    margin: "auto",
    boxSizing: "border-box"
  },
  classButton: {
    backgroundColor: "#f26522",
    color: "white",
    fontWeight: "500",
    margin: "8%",
    padding: "4% 10%",
    boxSizing: "border-box"
  },
  CardHeader: {
    fontWeight: "bold",
    margin: "auto",
    color: "blue",
    boxSizing: "border-box"
  }
});

const Product = ({
  title,
  instructor,
  buttonText,
  obj,
  rou,
  type,
  lang,
  imageUrl
}) => {
  const classes = ProductStyles();
  const isCourse = type === "course";
  return (
    <Card className={classes.classHolder}>
      <img
        src={imageUrl ? imageUrl : img1}
        className={classes.CardImage}
        alt="Instructor"
      />
      <CardHeader title={title} subheader={instructor} />

      <Button className={classes.classButton}>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={{
            pathname: isCourse ? `${rou}/${obj}` : `${rou}/${obj._id}`,
            state: obj
          }}
        >
          {buttonText}
        </Link>
      </Button>
    </Card>
  );
};

export default Product;

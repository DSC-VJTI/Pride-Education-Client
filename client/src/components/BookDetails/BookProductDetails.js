import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import BookDetails from "./BookDetails";
import "./BookDetails.css";
import ProductImages from "./BookProductImages";
import axios from "axios";
import { BASE_URL } from "../../constants";
const ProductDetailsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));
const BookProductDetails = ({ match }) => {
  const classes = ProductDetailsStyles();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const innerProduct = await axios.get(
      `${BASE_URL}/products/${match.params._id}`
    );

    setProduct(innerProduct.data.data);
  };

  return (
    <div className={classes.root} style={{ margin: "2rem" }}>
      <div className="grid">
        <ProductImages />

        {"book" in product && <BookDetails product={product} />}
      </div>
    </div>
  );
};

export default BookProductDetails;

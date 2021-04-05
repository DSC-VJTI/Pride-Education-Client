import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import TestDetails from "./TestDetails";
import BuyingOptions from "./TestBuyingOptions";
import ProductImages from "./TestProductImages";
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
const TestProductDetails = ({ match }) => {
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
      <Grid container spacing={3}>
        <Grid container item xs={6}>
          <Grid item xs={12} style={{ margin: "0rem 1.5rem" }}>
            <ProductImages />
          </Grid>
          <Grid item xs={12} style={{ margin: "0rem 1.5rem" }}>
            <BuyingOptions />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {"test" in product && <TestDetails product={product} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default TestProductDetails;

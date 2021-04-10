import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Details from "./Details";
import BuyingOptions from "./BuyingOptions";
import ProductImages from "./ProductImages";
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
const ProductDetails = ({ match }) => {
  const classes = ProductDetailsStyles();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    console.log(match.params.name);
    const innerProduct = await axios.get(`${BASE_URL}/product/filter`, {
      subject: match.params.name
    });

    console.log(innerProduct.data.course);
    // setProduct(innerProduct.data.data);
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
          {"course" in product && <Details product={product} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;

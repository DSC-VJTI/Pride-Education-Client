import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import BookDetails from "./BookDetails";
import download from "../../Resources/img1.jpeg";
import ProductImages from "./BookProductImages";
import axios from "axios";
import { BASE_URL } from "../../constants";

const ProductDetailsStyles = makeStyles((theme) => ({
  root: {
    "& div.MuiGrid-root.MuiGrid-spacing-xs-3": {
      paddingTop: "10vh",
      "@media (max-width: 1000px)": {
        paddingTop: "1vh"
      }
    },
    "& img": {
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
      width: "100%",
      height: "auto",
      maxWidth: "500px"
    }
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
      <Grid container spacing={3}>
        <Grid container item md={6} xs={12}>
          <img src={download} className={classes.root} />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          {"book" in product && <BookDetails product={product} />}
        </Grid>
        <Grid item lg={1} xs={false}></Grid>
      </Grid>
    </div>
  );
};

export default BookProductDetails;

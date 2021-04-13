import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import TestDetails from "./TestDetails";
import "./td.css";
import ProductImages from "./TestProductImages";
import axios from "axios";
import { BASE_URL } from "../../constants";

const TestProductDetails = ({ match }) => {
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
    <div className="grid">
      <img src="https://picsum.photos/200" alt="photo" />

      <div>{"test" in product && <TestDetails product={product} />}</div>
    </div>
  );
};

export default TestProductDetails;

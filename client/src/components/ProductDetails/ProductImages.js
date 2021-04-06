import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import img1 from "../../assets/images/resourceImages/img1.jpeg";
const ProductImages = () => {
  return (
    <div>
      <Grid container xs={12}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
          controls
          maxWidth="550px"
          playsinline
        />
      </Grid>
    </div>
  );
};

export default ProductImages;

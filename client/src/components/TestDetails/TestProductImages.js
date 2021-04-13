import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import img1 from "../../assets/images/resourceImages/img1.jpeg";
const TestImages = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
        controls
        maxWidth="100%"
        playsinline
      />
    </div>
  );
};

export default TestImages;

import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import HomePageImage from "./HomePageImage";
const Hero = () => {
  const [imageId, setImageId] = useState(1);
  const flipImages = () => {
    if (imageId === 1) {
      setImageId(2);
    }
    if (imageId === 2) {
      setImageId(1);
    }
  };
  useEffect(() => {
    setTimeout(flipImages, 5000);
  }, [imageId]);
  return (
    <section id="heroSection">
      <HomePageImage imageId={imageId} />
    </section>
  );
};

export default Hero;

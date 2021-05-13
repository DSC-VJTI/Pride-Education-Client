import React from "react";
import "./LandingPage.css";
import HomeImage1 from "../../assets/images/landingImages/HomeImage1.png";
import HomeImage2 from "../../assets/images/landingImages/HomeImage2.png";
const HomePageImage = (props) => {
  if (props.imageId == 1) {
    return <img id="HomeImage" src={HomeImage1} />;
  } else if (props.imageId == 2) {
    return <img id="HomeImage" src={HomeImage2} />;
  } else {
    return null;
  }
};
export default HomePageImage;

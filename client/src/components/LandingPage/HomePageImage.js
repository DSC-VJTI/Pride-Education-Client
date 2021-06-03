import React from "react";
import "./LandingPage.css";
import HomeImage1 from "../../assets/images/landingImages/HomeImage1.png";
import HomeImage2 from "../../assets/images/landingImages/HomeImage2.png";
const HomePageImage = (props) => {
  if (props.imageId == 1) {
    return (
      <div
        style={{
          alignItems: "center",
          width: "95%",

          margin: "10px 0"
        }}
      >
        <img
          style={{
            alignItems: "center",
            width: "100%",
            height: "auto"
          }}
          src={HomeImage1}
        />
      </div>
    );
  } else if (props.imageId == 2) {
    return (
      <div
        style={{
          alignItems: "center",
          width: "95%",

          margin: "10px 0"
        }}
      >
        <img
          style={{
            alignItems: "center",
            width: "100%",
            height: "auto"
          }}
          src={HomeImage2}
        />
      </div>
    );
  } else {
    return null;
  }
};
export default HomePageImage;

import { Typography, Box } from "@material-ui/core";
import React from "react";
import aboutImage from "../../assets/images/landingImages/about.jpg";
import "./LandingPage.css";
const About = () => {
  return (
    <section id="aboutSection">
      <Box p={3}>
        <Typography
          variant="h2"
          className="centerText headingText "
          data-aos="fade-up"
        >
          About Us
        </Typography>
        <div className="container">
          <div className="grid twoCols">
            <Box p={2}>
              <div className="aboutLeft">
                <Typography
                  variant="body1"
                  className="centerText "
                  data-aos="fade-left"
                >
                  Here at Pride Education, clearing concepts and working hand in
                  hand with our students to deliver the best education possible
                  to them is the highest priority. With extensive experience in
                  both teaching and some practical experience as well, CA
                  Abhishek Khilwani sir leaves no stone unturned to deliver the
                  best costing education to students.
                </Typography>
              </div>
            </Box>
            <div className="aboutRight">
              <figure>
                <img
                  src={aboutImage}
                  className="mkresp"
                  alt="random"
                  data-aos="fade-right"
                />
              </figure>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default About;

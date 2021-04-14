import { Typography } from "@material-ui/core";
import React from "react";
import aboutImage from "../../assets/images/landingImages/about.jpg";
import "./LandingPage.css";
const About = () => {
  return (
    <section id="aboutSection">
      <h2 className="aboutText">About Us</h2>

      <div className="container mt-5">
        <div className="grid">
          <div>
            <p className="centerText paraStyle " data-aos="fade-left">
              Here at Pride Education, clearing concepts and working hand in
              hand with our students to deliver the best education possible to
              them is the highest priority. With extensive experience in both
              teaching and some practical experience as well, CA Abhishek
              Khilwani sir leaves no stone unturned to deliver the best costing
              education to students.
            </p>
          </div>
          <img
            src={aboutImage}
            className="img-fluid"
            alt="random"
            data-aos="fade-right"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

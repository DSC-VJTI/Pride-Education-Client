import { Typography } from "@material-ui/core";
import React from "react";
import aboutImage from "../../assets/images/landingImages/about.jpg";

const About = () => {
  return (
    <section id="aboutSection">
      <Typography
        variant="h2"
        className="centerText headingText whiteText"
        data-aos="fade-up"
      >
        About Us
      </Typography>
      <div className="container">
        <div className="grid twoCols">
          <div className="aboutLeft">
            <Typography
              variant="p"
              className="centerText whiteText"
              data-aos="fade-left"
            >
              Lorem ipsum dolor sit amet consectetur adipis icing elit. Sequi
              voluptatem pariatur dolores mole stiae optio cumque harum
              corporis, maxime tenetur dele niti. Officia aliquam veritatis
              dicta quod aut nesciunt repellat accusant ium numquam omnis, cum
              alias dignissimos, dolorem laboriosam id? Poss imus officia
              reiciendis architec to nostrum laborum quidem laboriosam ullam
              quas odio, aliquid sequi!
            </Typography>
          </div>
          <div className="aboutRight">
            <figure>
              <img
                src={aboutImage}
                className="mkresponsive"
                alt="random"
                data-aos="fade-right"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

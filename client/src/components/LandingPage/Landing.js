import React from "react";
import Hero from "./Hero";
import About from "./About";
import "./LandingPage.css";
import CardCarousel from "./CardCarousel";
import { useAuthState } from "../../context/context";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Landing = () => {
  // Just do this to access user details and token.
  const state = useAuthState();
  const history = useHistory();
  return (
    <main>
      <a
        href="https://wa.me/+917507106467"
        className="whatsapp_float"
        target="_blank"
      >
        {" "}
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Hero />
      <div style={{ textAlign: "center", margin: "10px 0px 22px 0px" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => history.push("/classes")}
          style={{ backgroundColor: "rgb(242, 101, 34)" }}
        >
          Explore our Products
        </Button>
      </div>
      <About />
      <CardCarousel />
    </main>
  );
};

export default Landing;

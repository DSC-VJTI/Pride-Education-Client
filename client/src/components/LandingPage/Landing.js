import React from "react";
import Hero from "./Hero";
import About from "./About";
import "./LandingPage.css";
import CardCarousel from "./CardCarousel";
import { useAuthState } from "../../context/context";
const Landing = () => {
  // Just do this to access user details and token.
  const state = useAuthState();

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

      <About />
      <CardCarousel />
    </main>
  );
};

export default Landing;

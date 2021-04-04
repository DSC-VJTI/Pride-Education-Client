import React from "react";
import Hero from "./Hero";
import About from "./About";
import "./LandingPage.css";
import CardCarousel from "./CardCarousel";
import { useAuthState } from "../../context/context";
import Footer from "../Footer/Footer";
const Landing = () => {
  // Just do this to access user details and token.
  const state = useAuthState();
  console.log(state);

  return (
    <main>
      <Hero />

      <About />
      <CardCarousel />
    </main>
  );
};

export default Landing;

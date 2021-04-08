import { Typography, Box } from "@material-ui/core";
import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import AniCard from "./AniCard";

const CardCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 }
  ];

  const testimonials = [
    {
      name: "CA. KAPIL CHANDWANI",
      text: "YOUR WORK AND TEACHING STYLE IS VERY GOOD SIR. KEEP SHINING"
    },
    {
      name: "VEENA",
      text:
        "FABULOUS SIR, YOUR EMPHASIS ON POINTS, VOICE MODULATION, PRACTICLE EXAMPLES, EVERYTING IS PERFECT, YOU WERE EVEN GREAT THAN MY SCMPE PREVIOUS FACULY"
    },
    {
      name: "CA. SAROJ KEWALRAMANI",
      text: "SIR YOUR TEACHING STYLE IS VERY GOOD, COSTING NOW LOOKS EASY"
    },
    {
      name: "SUNNY UDASI",
      text: "ONE WORD – PROFESSIONALISM = ABHISHEK SIR, THANK YOU"
    },
    {
      name: "KETKI BHIWGADE",
      text:
        "GREAT JOB SIR, BEST WAY TO TEACH, BEST GUIDENCE EVEN, THANKS FOR EVERYHING, YOU ROCK SIR"
    }
  ];

  return (
    <section id="CardCarousel">
      <Box p={5}>
        <Typography variant="h2" className="centerText">
          Testimonials
        </Typography>
        <ReactElasticCarousel
          className="addMarginTop"
          breakPoints={breakPoints}
        >
          {testimonials.map((testimonial) => {
            return <AniCard name={testimonial.name} text={testimonial.text} />;
          })}
        </ReactElasticCarousel>
      </Box>
    </section>
  );
};

export default CardCarousel;

import { Typography } from "@material-ui/core";
import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import AniCard from "./AniCard";

const CardCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <section id="CardCarousel">
      <Typography variant="h2" className="centerText">
        Our Clients
      </Typography>
      <ReactElasticCarousel className="addMarginTop" breakPoints={breakPoints}>
        <AniCard />
        <AniCard />
        <AniCard />
        <AniCard />
        <AniCard />
      </ReactElasticCarousel>
    </section>
  );
};

export default CardCarousel;

import React from "react";
import ComboBox from "./ComboBox";
import { ReactElasticCarousel } from "react-elastic-carousel/dist/index";

const FilteredCarousel = () => {
  return (
    <div>
      <ComboBox title="test series" />
      <div data-aos="fade-up">
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          {products.map((prod) => {
            if (prod.type === "test series") {
              return (
                <div data-aos="flip-right">
                  <Product
                    title={prod.name}
                    instructor={prod.courseDetails.faculty}
                  />
                </div>
              );
            }
          })}
        </ReactElasticCarousel>
      </div>
    </div>
  );
};

export default FilteredCarousel;

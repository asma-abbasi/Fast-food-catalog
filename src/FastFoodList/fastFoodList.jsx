import React from "react";
import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItem }) => {
  let delay = 0.1;
  return (
    <div className="row">
      {fastFoodItem.map((fastfood) => {
        delay += 0.03;
        return (
          <div
            className="col-md-4 col-sm-6 md-grid-gutter mb-3"
            key={fastfood.id}
          >
            <FastFoodItem {...fastfood} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;

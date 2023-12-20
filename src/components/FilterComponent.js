import { restaurantsData } from "../utils/data";
import { useState } from "react";

const FilterComponent = ({ onFilter }) => {
  return (
    <div className="filter-options">
      <div className="option">
      <button
          onClick={() => {
            onFilter((res) => res);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            onFilter((res) => res.deliveryTime < 25);
          }}
        >
          Fast Delivery
        </button>
      </div>
      <div className="option">
        <button
          onClick={() => {
            onFilter((res) => res.veg == true);
          }}
        >
          Pure Veg
        </button>
      </div>
      <div className="option">
        <button
          onClick={() => {
            onFilter((res) => res.freeDelivery == true);
          }}
        >
          Free Delivery
        </button>
      </div>
    </div>
  );
};



export default FilterComponent;
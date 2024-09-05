import React from "react";
import "./PricingPageCentre.css";
import { pricing } from "../../data/pricing";

export const PricingPageCentre = (props) => {
  const prices = props.prices;

  return (
    <div className="pricingPageCentre">
      <div className="pricingBackgroundPhotoWrapper">
        <img
          className="pricingBackgroundPhoto"
          href=""
          style={{ backgroundImage: `url(${props.imagePricing})` }}
        ></img>
      </div>

      <div className="menuWrapper">
        {pricing.map((item, index) => {
          return (
            <div className="menuPricingContainer" key={index}>
              <div className="categoryContainer"></div>
              <p className="categoryContent">{item.category}</p>
              {item.services.map((service, i) => {
                return (
                  <div className="serviceContainer" key={i}>
                    <p className="serviceNameContent">{service.name}</p>
                    <p className="servicePriceContent">{service.priceRange}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { pricing } from "../data/pricing";
import { getSingle } from "../utils/utils";
import { PricingPageCentre } from "../components/PricingPageCentre/PricingPageCentre";

export const Pricing = () => {
  const [pricingPhoto, setPricingPhoto] = useState("");
  const [prices, setPrices] = useState([]);

  const fetchPricingPhoto = async () => {
    const data = await getSingle("2aiP_wxNrfU");
    const photo = data.urls.full;
    setPricingPhoto(photo);
  };

  useEffect(() => {
    fetchPricingPhoto();
    setPrices(pricing);
  }, []);

  return pricingPhoto ? (
    <PricingPageCentre imagePricing={pricingPhoto} prices={prices} />
  ) : (
    <p>Loading</p>
  );
};

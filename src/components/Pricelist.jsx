import React from "react";
import { useParams } from "react-router-dom";
import { priceListData } from "./PricelistData";

const PriceList = ({ subpage: propSubpage }) => { 
  // Check for direct prop first, fallback to useParams for dynamic routes
  const { subpage: paramSubpage } = useParams();
  const subpage = propSubpage || paramSubpage;

  // Retrieve data for the specific subpage
  const priceList = priceListData[subpage];

  if (!priceList) {
    return <div>Brak cennika!</div>; // Handle invalid or missing subpage
  }

  return (
    <div className="price-list-shadow">
      <div className="price-list">
        {priceList.map((item) => (
          <div
            key={item.id}
            className={`price-container ${item.id === 1 ? "highlight-item" : "regular-item"}`}
          >
            <div className="price-item">
              <h3 className={`item-name ${item.id === 1 ? "bold-text" : ""}`}>{item.name}</h3>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;

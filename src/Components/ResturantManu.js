import React from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useFetchMenu from "./utils/useFetchMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, recommendedItems, isLoading, error } =
    useFetchMenu(resId);

  if (isLoading) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  const { name, cuisines, costForTwoMessage, avgRating, city, areaName } =
    restaurantInfo || {};

  return (
    <div className="menu">
      {/* Restaurant Details */}
      <h1>{name}</h1>
      <h3>
        {cuisines && cuisines.length > 0
          ? cuisines.join(", ")
          : "Cuisines Not Available"}
      </h3>
      <h3>{costForTwoMessage}</h3>
      <p>Rating: {avgRating}</p>
      <p>
        {areaName}, {city}
      </p>

      {/* Recommended Dishes */}
      <h2>Recommended Dishes</h2>
      {recommendedItems.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {recommendedItems.map((item, index) => {
            const { info } = item.card;
            const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${info.imageId}`;

            return (
              <li key={index} style={{ marginBottom: "20px" }}>
                <h3>{info.name}</h3>
                {info.imageId && (
                  <img
                    src={imageUrl}
                    alt={info.name}
                    style={{
                      width: "200px",
                      height: "180px",
                      borderRadius: "8px",
                    }}
                  />
                )}
                <p>Price: ₹{info.price / 100 || info.defaultPrice / 100}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Recommended Dishes Available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;

import React from "react";

function ResturantCard(props) {
  const { resdata } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resdata?.info;

  // Construct the dynamic image URL using cloudinaryImageId
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${cloudinaryImageId}`;

  return (
    <div className="res-cards" style={{ backgroundColor: "#f0f0f1" }}>
      <img
        className="res-logo"
        alt={name}
        src={imageUrl}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
}

export default ResturantCard;

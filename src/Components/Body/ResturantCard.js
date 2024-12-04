import React from "react";

function ResturantCard(props) {
  const { resdata } = props;

  const {name,cuisines,avgRating,costForTwo} = resdata?.info;

  const imageUrl = `https://picsum.photos/660/370?random=${Math.floor(Math.random() * 1000)}`;

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

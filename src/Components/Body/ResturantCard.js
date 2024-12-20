import React from "react";

function ResturantCard(props) {
  const { resdata } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resdata?.info;

  // Construct the dynamic image URL using cloudinaryImageId
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${cloudinaryImageId}`;

  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-white transition-all duration-300">
      <img
        className="w-full h-40 object-cover"
        alt={name}
        src={imageUrl}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <h4 className="text-gray-500 text-sm mt-1">
          {cuisines.join(", ")}
        </h4>
        <div className="flex justify-between items-center mt-2">
          <span
            className={`px-2 py-1 text-xs font-bold rounded ${
              avgRating >= 4 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
            }`}
          >
            ★ {avgRating}
          </span>
          <h5 className="text-sm text-gray-600">{costForTwo}</h5>
        </div>
        <h5 className="text-gray-500 text-xs mt-2">
          {sla?.deliveryTime} mins
        </h5>
      </div>
    </div>
  );
}

export default ResturantCard;

import React, { useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useFetchMenu from "./utils/useFetchMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, recommendedItems, isLoading, error } = useFetchMenu(resId);

  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  if (isLoading) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  const { name, cuisines, costForTwoMessage, avgRating, city, areaName } =
    restaurantInfo || {};

  return (
    <div className="text-center p-4 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Restaurant Details */}
        <div className="mb-6 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h1 className="font-bold text-4xl mb-2 text-gray-800">{name}</h1>
          <div className="flex flex-col gap-2 text-left text-gray-600">
            <p className="text-lg font-medium text-gray-700">
              {cuisines && cuisines.length > 0
                ? cuisines.join(", ")
                : "Cuisines Not Available"}
            </p>
            <div className="flex items-center gap-4 text-lg">
              <p className="font-medium text-green-600 flex items-center">
                <span className="material-icons mr-1">star</span>
                {avgRating} ({restaurantInfo.totalRatings} ratings)
              </p>
              <p className="font-medium text-gray-600">&#8226; {costForTwoMessage}</p>
            </div>
            <div className="text-gray-500">
              <p>
                <span className="font-medium">Outlet:</span> {areaName}
              </p>
              <p>Delivery Time: 35-40 mins</p>
            </div>
            <p className="text-gray-500">{city}</p>
          </div>
        </div>

        {/* Accordion for Recommended Dishes */}
        <div className="bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-t-lg focus:outline-none hover:bg-gray-200"
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          >
            <h2 className="font-semibold text-xl">
              Recommended Dishes ({recommendedItems.length})
            </h2>
            <span className="text-xl">{isAccordionOpen ? "▲" : "▼"}</span>
          </button>
          {isAccordionOpen && (
            <div className="p-4">
              {recommendedItems.length > 0 ? (
                <ul className="space-y-6">
                  {recommendedItems.map((item, index) => {
                    const { info } = item.card;
                    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${info.imageId}`;
                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center border-b pb-4"
                      >
                        <div className="flex flex-col text-left w-2/3">
                          <h3 className="text-lg font-semibold">{info.name}</h3>
                          <p className="text-md text-gray-600">
                            ₹{info.price / 100 || info.defaultPrice / 100}
                          </p>
                          {info.description && (
                            <p className="text-sm text-gray-500 mt-1">
                              {info.description}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-center w-1/3">
                          {info.imageId && (
                            <img
                              src={imageUrl}
                              alt={info.name}
                              className="h-32 w-32 object-cover rounded-md mb-2"
                            />
                          )}
                          <button
                            className="bg-black text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none"
                          >
                            Add +
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-500">No Recommended Dishes Available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

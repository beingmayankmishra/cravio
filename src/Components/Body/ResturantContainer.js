import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";

const ResturantContainer = () => {
  const [reslist, setRestList] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();
      console.log("API Response:", json);

      // Explore the structure of cards
      const cards = json?.data?.cards;
      console.log("All Cards:", cards);

      // Locate the card containing restaurant data
      const restaurantCard = cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      // Extract the restaurants array
      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      console.log("Extracted Restaurants:", restaurants);

      setRestList(restaurants); // Update state with the extracted data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterTopRated = () => {
    const filteredList = reslist.filter(
      (restaurant) => restaurant.info.avgRating > 4.2
    );
    setRestList(filteredList);
  };

  return (
    <div className="body">
      {/* Filter button */}
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant cards */}
      <div className="res-container">
        {reslist.length > 0 ? (
          reslist.map((restaurant) => (
            <ResturantCard key={restaurant.info.id} resdata={restaurant} />
          ))
        ) : (
          <h1>Loading restaurants...</h1>
        )}
      </div>
    </div>
  );
};

export default ResturantContainer;

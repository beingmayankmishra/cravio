import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "../../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const ResturantContainer = () => {
  const [reslist, setRestList] = useState([]); // Full list of restaurants
  const [filteredResturant, setfilteredResturant] = useState([]); // Filtered list for display
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const cards = json?.data?.cards;
      const restaurantCard = cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      setRestList(restaurants); // Set full restaurant list
      setfilteredResturant(restaurants); // Initialize filtered list
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterTopRated = () => {
    const filteredList = reslist.filter(
      (restaurant) => restaurant.info.avgRating > 4.2
    );
    setfilteredResturant(filteredList); // Update only the filtered list
  };

  const handleSearch = () => {
    const filteredList = reslist.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredResturant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you're offline!! plesae check your internet connection</h1>

  // Conditional Rendering
  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search and Filter Section */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><ResturantCard  resdata={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default ResturantContainer;

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
  if (onlineStatus === false)
    return <h1>Looks like you're offline!! Please check your internet connection</h1>;

  // Conditional Rendering
  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search and Filter Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-between px-4 py-6 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search restaurants"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-100 px-4 py-2 mt-4 md:mt-0 rounded-md hover:bg-gray-200"
          onClick={filterTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredResturant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <ResturantCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResturantContainer;

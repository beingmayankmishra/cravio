import { useState, useEffect, useCallback } from "react";
// custom hook for fetching the resturantdata
const useFetchMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=18.9486&lng=72.83662&restaurantId=${resId}`
      );
      const data = await response.json();

      // Extract Restaurant Info
      const restaurantCard = data?.data?.cards?.find(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      const restaurantDetails = restaurantCard?.card?.card?.info;
      setRestaurantInfo(restaurantDetails);

      // Extract Recommended Items
      const recommendedData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.find((x) => x?.card?.card?.title === "Recommended")
        ?.card?.card?.itemCards;
      setRecommendedItems(recommendedData || []);
    } catch (err) {
      setError(err.message || "Error fetching menu");
    } finally {
      setIsLoading(false);
    }
  }, [resId]);

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [fetchMenu, resId]);

  return { restaurantInfo, recommendedItems, isLoading, error };
};

export default useFetchMenu;

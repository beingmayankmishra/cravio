import React from "react";
import ResturantCard from "./ResturantCard";

const ResturantContainer = () => {

  const reslist = [
    {
      "info": {
        "id": "594820",
        "name": "Chinese Wok",
        "cuisines": ["Chinese"],
        "avgRating": 4.1,
        "costForTwo": "₹250 for two"
      }
    },
    {
      "info": {
        "id": "466874",
        "name": "Cheesecake & Co.",
        "cuisines": ["Bakery", "Desserts"],
        "avgRating": 4.6,
        "costForTwo": "₹300 for two"
      }
    },
    {
      "info": {
        "id": "558791",
        "name": "HRX by EatFit",
        "cuisines": ["Healthy Food", "Salads", "Burgers"],
        "avgRating": 4.6,
        "costForTwo": "₹450 for two"
      }
    },
    {
      "info": {
        "id": "145541",
        "name": "Starbucks Coffee",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.4,
        "costForTwo": "₹400 for two"
      }
    },
    {
      "info": {
        "id": "68318",
        "name": "Chaayos Chai+Snacks=Relax",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "avgRating": 4.6,
        "costForTwo": "₹250 for two"
      }
    },
    {
      "info": {
        "id": "799930",
        "name": "Theobroma",
        "cuisines": ["Desserts"],
        "avgRating": 4.4,
        "costForTwo": "₹400 for two"
      }
    },
    {
      "info": {
        "id": "11748",
        "name": "Subway",
        "cuisines": ["Sandwich", "Salads", "Wraps", "Healthy Food"],
        "avgRating": 4.2,
        "costForTwo": "₹350 for two"
      }
    },
    {
      "info": {
        "id": "910482",
        "name": "Domino's Pizza",
        "cuisines": ["Pizza", "Fast Food"],
        "avgRating": 4.3,
        "costForTwo": "₹300 for two"
      }
    },
    {
      "info": {
        "id": "763910",
        "name": "Burger King",
        "cuisines": ["Burgers", "Fast Food"],
        "avgRating": 4.0,
        "costForTwo": "₹250 for two"
      }
    },
    {
      "info": {
        "id": "340298",
        "name": "KFC",
        "cuisines": ["Chicken", "Fast Food"],
        "avgRating": 4.1,
        "costForTwo": "₹300 for two"
      }
    },
    {
      "info": {
        "id": "142869",
        "name": "Pizza Hut",
        "cuisines": ["Pizza", "Italian"],
        "avgRating": 4.0,
        "costForTwo": "₹400 for two"
      }
    },
    {
      "info": {
        "id": "482937",
        "name": "Haldiram's",
        "cuisines": ["Indian", "Snacks", "Street Food"],
        "avgRating": 4.2,
        "costForTwo": "₹350 for two"
      }
    },
    {
      "info": {
        "id": "578920",
        "name": "Bikanervala",
        "cuisines": ["Indian", "Sweets", "Snacks"],
        "avgRating": 4.3,
        "costForTwo": "₹300 for two"
      }
    },
    {
      "info": {
        "id": "608172",
        "name": "Wow! Momo",
        "cuisines": ["Momos", "Chinese", "Snacks"],
        "avgRating": 4.1,
        "costForTwo": "₹250 for two"
      }
    },
    {
      "info": {
        "id": "834107",
        "name": "McDonald's",
        "cuisines": ["Burgers", "Fast Food", "Beverages"],
        "avgRating": 4.2,
        "costForTwo": "₹300 for two"
      }
    },
    {
      "info": {
        "id": "438190",
        "name": "Faasos - Wraps & Rolls",
        "cuisines": ["Indian", "Fast Food"],
        "avgRating": 4.3,
        "costForTwo": "₹300 for two"
      }
    },
    {
      "info": {
        "id": "921760",
        "name": "Behrouz Biryani",
        "cuisines": ["Biryani", "Indian"],
        "avgRating": 4.5,
        "costForTwo": "₹450 for two"
      }
    },
    {
      "info": {
        "id": "534819",
        "name": "Barbeque Nation",
        "cuisines": ["Barbecue", "Indian"],
        "avgRating": 4.6,
        "costForTwo": "₹1,000 for two"
      }
    },
    {
      "info": {
        "id": "349610",
        "name": "Amritsari Kulcha Hub",
        "cuisines": ["North Indian", "Street Food"],
        "avgRating": 4.3,
        "costForTwo": "₹200 for two"
      }
    },
    {
      "info": {
        "id": "128403",
        "name": "Chowman",
        "cuisines": ["Chinese"],
        "avgRating": 4.4,
        "costForTwo": "₹500 for two"
      }
    },
    {
      "info": {
        "id": "841037",
        "name": "Nando's",
        "cuisines": ["Peri Peri", "Grill", "Burgers"],
        "avgRating": 4.5,
        "costForTwo": "₹800 for two"
      }
    },
    {
      "info": {
        "id": "938427",
        "name": "Keventers - Milkshakes",
        "cuisines": ["Beverages", "Desserts"],
        "avgRating": 4.2,
        "costForTwo": "₹300 for two"
      }
    },
    {
      "info": {
        "id": "309842",
        "name": "Mughlai Darbar",
        "cuisines": ["Mughlai", "Indian"],
        "avgRating": 4.3,
        "costForTwo": "₹600 for two"
      }
    },
    {
      "info": {
        "id": "429387",
        "name": "Mithaas",
        "cuisines": ["Indian", "Sweets", "Bakery"],
        "avgRating": 4.0,
        "costForTwo": "₹350 for two"
      }
    },
    {
      "info": {
        "id": "827193",
        "name": "Shake It Off",
        "cuisines": ["Beverages", "Desserts"],
        "avgRating": 4.1,
        "costForTwo": "₹200 for two"
      }
    },
    {
      "info": {
        "id": "918237",
        "name": "Sagar Ratna",
        "cuisines": ["South Indian", "Indian"],
        "avgRating": 4.4,
        "costForTwo": "₹300 for two"
      }
    },
    {
      "info": {
        "id": "573829",
        "name": "Taco Bell",
        "cuisines": ["Mexican", "Fast Food"],
        "avgRating": 4.2,
        "costForTwo": "₹350 for two"
      }
    },
    {
      "info": {
        "id": "174039",
        "name": "Punjabi Dhaba",
        "cuisines": ["North Indian", "Thalis"],
        "avgRating": 4.1,
        "costForTwo": "₹250 for two"
      }
    },
    {
      "info": {
        "id": "823910",
        "name": "Karim's",
        "cuisines": ["Mughlai", "Indian"],
        "avgRating": 4.5,
        "costForTwo": "₹700 for two"
      }
    }];
  

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
 
export default ResturantContainer;

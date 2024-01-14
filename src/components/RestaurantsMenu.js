import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { swiggy_res_menu_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantsMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[0]?.card?.card?.info;
//Fetch Restaurant menus
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    
    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{avgRating} STARS</h3>
            <h2>Menu's</h2>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - {" Rs. "} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                )}
            </ul>
        </div>
    );
};

export default RestaurantsMenu;
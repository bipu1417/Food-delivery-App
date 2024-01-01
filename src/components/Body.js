import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
  
const Body = () => {
    const [restList, setRestList] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = restList.filter((res) => res.data.avgRating > 4);
                    setRestList(filteredList);
                }}>Top Rated</button>
            </div>
            <div className="res-container">
                {
                    restList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
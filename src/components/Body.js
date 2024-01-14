import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
  
const Body = () => {
    const [restList, setRestList] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(swiggy_api_URL);

        const json = await data.json();
        // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    };

    // Conditional Rendering
    // We can use Ternery operator also for conditional rendering

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>Oops!!! Looks Like You're Offline!!!</h1>
    }

    if(filteredRest.length === 0){
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-button" onClick={() => {
                        console.log("Button click - "+searchText);
                        const filteredList = restList.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRest(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = restList.filter((res) => res.info.avgRating > 4);
                    setRestList(filteredList);
                }}>Top Rated</button>
            </div>
            <div className="res-container">
                {
                    filteredRest.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard resData={restaurant}/>
                    </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
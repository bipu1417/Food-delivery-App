import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
  
const Body = () => {
    const [restList, setRestList] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState("");

    const {loggedInUser, setUserInfo} = useContext(UserContext);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(swiggy_api_URL);

        const json = await data.json();
        // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards);
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
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        console.log("Button click - "+searchText);
                        const filteredList = restList.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRest(filteredList);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                    const filteredList = restList.filter((res) => res.info.avgRating > 4);
                    setRestList(filteredList);
                }}>Top Rated</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <lable>UserName : </lable>
                <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserInfo(e.target.value)}></input>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRest.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        {
                            restaurant?.info.veg ? <RestaurantCardPromoted resData={restaurant} /> :
                            <RestaurantCard resData={restaurant}/>
                        }
                        
                    </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
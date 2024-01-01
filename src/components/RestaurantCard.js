import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, costForTwo, slaString, avgRating} = resData?.data;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h4>{avgRating} stars</h4>
            <h4>Rs. {costForTwo/100} for Two</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

export default RestaurantCard;
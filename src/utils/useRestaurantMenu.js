import { useEffect, useState } from "react";
import { swiggy_res_menu_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(swiggy_res_menu_URL+resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    console.log("Hook - "+resInfo)
    return resInfo;
}


export default useRestaurantMenu;
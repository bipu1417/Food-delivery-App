const { useEffect, useState } = require("react");

const useOnlineStatus = () => {

    const [useOnlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
        });
    }, []);

    return useOnlineStatus;
};

export default useOnlineStatus;
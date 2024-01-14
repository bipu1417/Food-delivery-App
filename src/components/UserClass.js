import React from "react";
import User from "./User";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            userInfo: {
                name: "Test Name",
                bio: "My Bio",
            }
        };
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/bipu1417");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate(){
        console.log("Component Did Update.");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount.");
    }
   
    render() {
        const {name, bio, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : Bangalore</h3>
                <h3>{bio}</h3>
                <h3>Contact : @dRevolution21</h3>
            </div>
        );
    }
}

export default UserClass;
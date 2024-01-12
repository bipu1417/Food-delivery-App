import React from "react";
import User from "./User";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            count: 0,
        };
    }
    render() {
        return (
            <div>
                <h2>Count : {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>
                    count increase
                </button>
                <h2>Name : {this.props.name}</h2>
                <User />
            </div>
        );
    }
}

export default UserClass;
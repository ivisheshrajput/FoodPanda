import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Constructor")
    }

    componentDidMount() {
        //  console.log("Component Did Mount")
    }

    componentDidUpdate() {
        //   console.log("Component Did Update")
    }

    componentWillUnmount() {

        //   console.log("Component UnMount")
    }
    render() {
        //  console.log("Render")
        return (
            <div>
                <h1>About with Class Based Component</h1>
                <UserContext.Consumer>
                    {({ loggedInUser }) => (<h1>{loggedInUser}</h1>)}
                </UserContext.Consumer>
            </div>
        )
    }
}
export default About;
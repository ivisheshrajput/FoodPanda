import { Component } from "react";
import UserContext from "../utils/UserContext";
import AboutPage from "../utils/AboutPage.jpg";

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
      <div className="mt-20 h-full p-6">
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-2xl font-semibold leading-7 text-red-700">
                    Deploy faster
                  </h2>
                  <UserContext.Consumer>
                    {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
                  </UserContext.Consumer>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    To Understand Class Based Component
                  </p>
                  <p className="mt-6 text-sm leading-8 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
              <img
                src={AboutPage}
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

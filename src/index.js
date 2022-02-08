import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lati: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lati: pos.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    console.log("Update called");
  }

  render() {
    if (this.state.errorMessage && !this.state.lati) {
      return <h1>Error : {this.state.errorMessage}</h1>;
    } else if (this.state.lati && !this.state.errorMessage) {
      return (
        <h1>
          <SeasonDisplay lat={this.state.lati} />
        </h1>
      );
    } else {
      return (
        <h1>
          <Spinner message="Kindly allow to access location" />
        </h1>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

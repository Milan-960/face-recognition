import React, { Component } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Logo from "./Components/Logo/Logo";
import ImgLinkForm from "./Components/ImgLinkForm/ImgLinkForm";
import Rank from "./Components/Rank/Rank";
import Particale from "./particlesOptions/Particale.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event);
  };

  render() {
    return (
      <>
        <div className="App">
          <Particale />
          <Navbar />
          <Logo />
          <Rank />
          <ImgLinkForm onInputChange={this.onInputChange} />
        </div>
      </>
    );
  }
}

export default App;

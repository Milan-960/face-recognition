import React, { useCallback } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Logo from "./Components/Logo/Logo";
import ImgLinkForm from "./Components/ImgLinkForm/ImgLinkForm";
import Rank from "./Components/Rank/Rank";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particlesOptions/ParticlesOptions.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <div className="App">
        <Particles
          options={particlesOptions}
          init={particlesInit}
          className="particals"
        />
        <Navbar />
        <Logo />
        <Rank />
        <ImgLinkForm />
      </div>
    </>
  );
}

export default App;

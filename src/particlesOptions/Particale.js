import React, { useCallback } from "react";
import particlesOptions from "./ParticlesOptions.json";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const Particale = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <Particles
      options={particlesOptions}
      init={particlesInit}
      className="particals"
    />
  );
};

export default Particale;

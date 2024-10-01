import React from "react";
import Aside from "./Aside";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row  gap-10  container mt-7" >
      <Aside />
      <HeroSlider />
    </section >
  );
};

export default Hero;

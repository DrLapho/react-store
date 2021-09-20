import React, { useState } from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Sidebar from "../sidebar/Sidebar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle = { toggle } />
      <Header toggle = {toggle} />
      <HeroSection/>
    </>
  );
};

export default HomePage;

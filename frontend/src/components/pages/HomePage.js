import React, { useState } from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import { homeObjOne,homeObjTwo,homeObjThree } from "../Info/Data";
import InfoSection from "../Info/Info";
import Services from "../Services/Services";
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
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
      
    </>
  );
};

export default HomePage;

import React,{ useState } from "react";
import Video from "../videos/video.mp4";
// import Video from '../../components/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to lapho nation bank</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facere
          asperiores repellat inventore mollitia voluptates nisi iure dolor,
          labore adipisci earum laudantium, fugiat non vel odit corporis.
          Necessitatibus, recusandae at?
        </HeroP>
      </HeroContent>

      <HeroBtnWrapper>
        {/* <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
          Get Started{hover ? <ArrowForward /> : <ArrowRight />}
        </Button> */}
      </HeroBtnWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

import React from "react";
import moneyPig from '../images/image1.svg'
import register from '../images/register.svg'
import {
  Column2,
  ImgWrap,
  InfoContainer,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Img,
  InfoWrapper,
  Subtitle,
  BtnWrap,
} from "./InfoElements";
import { Button } from "../ButtonElement";

const InfoSection = ({
  lightBg,
  lightText,
  buttonLabel,
  darkText,
  headline,
  description,
  imgStart,
  alt,
  id,
  topLine,
  primary,dark
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home"
                  smooth = {true}
                  duration = {500}
                  spy ={true}
                  exact = "true"
                  offset = {-80}
                  primary = {primary ? 1 : 0 }
                  dark = {dark ? 1 : 0 }
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={moneyPig}
                  alt={alt}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

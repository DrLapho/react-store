import React from "react";
import moneyPig from "../images/image1.svg";
import { NavBtn, NavBtnLink } from "../Header/HeaderElements";
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

const InfoSection = ({
  to,
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
  primary,
  dark,
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
                  <NavBtn>
                    <NavBtnLink to={to}> {buttonLabel}</NavBtnLink>
                  </NavBtn>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={moneyPig} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

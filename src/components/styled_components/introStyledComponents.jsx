import styled, { keyframes } from "styled-components";
import { pulseAnimation, moveUpAndDownAnimation } from "./animations";

export const IntroSection = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
    
  /* Low-Resolution Tablets and iPads and mobiles */
  @media only screen and (max-width: 1280px) {
    height: 200vh;
    scroll-snap-align: none;
  }
  

`;

export const IntroContainer = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: none;
  }

`;

export const IntroLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1280px) {
    flex: 1;
    align-items: center;
  }
`;

export const IntroTitle = styled.h1`
  font-size: 74px;

  span {
    background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  @media only screen and (max-width: 1280px) {
    text-align: center;
  }
`;

export const IntroWhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IntroLine = styled.img`
  height: 5px;
`;

export const IntroSubtitle = styled.h2`
background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
-webkit-background-clip: text;
color: transparent;
font-weight: bold;
`;

export const IntroDesc = styled.p`
  font-size: 24px;
  margin: 0;
  color: lightgray;

span {
  background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
}


  @media only screen and (max-width: 1280px) {
    padding: 20px;
    text-align: center;
  }
`;

export const IntroButton = styled.button`
background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
color: white;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  animation: ${pulseAnimation} 5s infinite;
`;

export const IntroRight = styled.div`
  flex: 3;
  position: relative;

  
  @media only screen and (max-width: 1280px) {
    flex: 1;
    width: 100%;
  }
`;

export const IntroImg = styled.img`
  width: 80%; 
  max-width: 800px; 
  height: auto; 
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: ${moveUpAndDownAnimation} 2s infinite ease alternate;

  @media only screen and (max-width: 400px) {
    display: none; 
  }

  /* Low-Resolution Tablets and iPads */
  @media only screen and (max-width: 1280px) {
    width: 70%; 
    max-width: none; 
    height: auto; 
  }
  
`;

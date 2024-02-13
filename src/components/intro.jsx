import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import CanvasBlob from "./3d_models/CanvasBlob";

import Navbar from "./navbar";

//animations
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0px rgba(218, 78, 162, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(218, 78, 162, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0px rgba(218, 78, 162, 0.7);
  }
`;

//styled components
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
    scroll-snap-align: none;

  }

`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: none;

  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  span {
    background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
-webkit-background-clip: text;
color: transparent;
font-weight: bold;
`;

const Desc = styled.p`
  font-size: 24px;
  margin: 0;
  color: lightgray;

span {
  background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
}


  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
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

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Intro = forwardRef((props, introRef) => {
  return (
    <Section ref={introRef}>
      <Container>
        <Left>
          <Title>Innovate. Integrate. <span>Inspire.</span></Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Tworzymy Witryny Zintegrowane z Przyszłością</Subtitle>
          </WhatWeDo>
          <Desc>
  W Creaitive tworzymy futurystyczne <span>witryny internetowe</span>, 
  budujemy narzędzia oparte na <span>sztucznej inteligencji</span>, które pomagają w automatyzacji procesów w twojej firmie.
  Tworzymy treści <span>marketingowe</span>, które przyciągają klientów,
  dzięki czemu ty oszczędzasz <span>czas</span> i <span>pieniądze</span>.
</Desc>


          <Button>Zobacz naszą ofertę</Button>
        </Left>
        <Right>
{/* <CanvasBlob/> */}
<Img src="./img/moon.png" />

        </Right>
      </Container>
    </Section>
  );
});

export default Intro;

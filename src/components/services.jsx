import React, { useState, forwardRef, Suspense } from "react";
import styled from "styled-components";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import CanvasBlob from "./3d_models/CanvasBlob";


//import services components
import WirtualniInfluencerzy from "./services_components/wirtualniInfluencerzy";
import TresciGraficzne from "./services_components/tresciGraficzne";
import IndywidualneRozwiazania from "./services_components/indywidualneRozwiazania";
import AIOptymalizacjaProcesow from "./services_components/AIOptymalizacjaProcesow";
import Chatboty from "./services_components/chatboty";
import KrotkieVideo from "./services_components/krotkieVideo";
import StronyInternetowe from "./services_components/stronyInternetowe";

// TO DO: Adjust 'data' based on business needs
const data = [
  "Strony Internetowe",
  "Chatboty", 
  "AI w optymalizacji procesów", 
  "Treści Graficzne", 
  "Krótkie Video", 
  "Wirtualni Influencerzy", 
  "Indywidualne Rozwiązania",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 0px;
    scroll-snap-align: none;

  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 0px;
  }
`;

const Left = styled.div`
  flex: 2;  
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 500px;

  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

//#da4ea2 - rozowy
const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.5px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;



const Right = styled.div`
  flex: 2;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    flex-direction: column;
    width: 100%;
  }
`;

//component to map
const servicesMapComponent = {
  "Strony Internetowe": StronyInternetowe,
  "Chatboty": Chatboty,
  "AI w optymalizacji procesów": AIOptymalizacjaProcesow,
  "Treści Graficzne": TresciGraficzne,
  "Krótkie Video": KrotkieVideo,
  "Wirtualni Influencerzy": WirtualniInfluencerzy,
  "Indywidualne Rozwiązania": IndywidualneRozwiazania,
};

const Services = forwardRef((props, ref) => {

  const [work, setWork] = useState(data[0]);
  const WorkComponent = servicesMapComponent[work];

  return (
    <Section ref={ref}>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        <CanvasBlob/>
          <WorkComponent />
        </Right>
      </Container>
    </Section>
  );
});

export default Services;

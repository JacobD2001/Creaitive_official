import React, { useState, forwardRef, Suspense, useRef } from "react";
import styled from "styled-components";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasBlob from "./3d_models/CanvasBlob";

//import services components
//import BusinessAutomation from "./packages_components/businessAutomation";
import BusinessInfluence from "./packages_components/businessInfluence";
import DigitalPresence from "./packages_components/digitalPresence";
import fullComfort from "./packages_components/fullComfort";

const data = [
  "Pakiet Digital Presence",
  "Pakiet Business Influence",
  "Pakiet Full Comfort"
  /*"Pakiet Business Automation",*/
];

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; /*na chwile none potem center*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
    
  /* Low-Resolution Tablets and iPads and mobiles */

  @media only screen and (max-width: 440px) {
    margin-top: 200px;
    height: 200vh;
    scroll-snap-align: none;
  }

  @media only screen and (max-width: 1023px) {
    margin-top: 200px;
    height: 200vh;
    scroll-snap-align: none;
  }
  

`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1023px) {
    flex: 1;
    align-items: center;
    flex-direction: column;
    order: 1;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  position: relative;

  @media only screen and (max-width: 1023px) {
    font-size: 30px;
    color: white;
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


const Left = styled.div`
  flex: 2;
  position: relative;
  @media only screen and (max-width: 1023px) {
    flex: 1;
    width: 100%;
    flex-direction: column;
    order: 2; /* Change the order on smaller screens */
    justify-content: center;
  }
`;

// const SectionName = styled.h2`

//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 10px;
//   color: white;
//   writing-mode: vertical-rl; /* Vertical writing mode */
//   transform: rotate(180deg); /* Rotate the text 180 degrees to make it vertical */

// `;

//component to map
const packagesMapComponent = {
  "Pakiet Digital Presence": DigitalPresence,
  "Pakiet Business Influence": BusinessInfluence,
  "Pakiet Full Comfort": fullComfort,
  // "Pakiet Business Automation": BusinessAutomation,
};

const Packages = forwardRef((props, ref) => {
  const { contactRef } = props;
  const [work, setWork] = useState(data[0]);
  const WorkComponent = packagesMapComponent[work];
  const workRef = useRef(null);

  const handleListItemClick = (item) => {
    setWork(item);
    if (window.innerWidth <= 1023) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Section ref={ref}>
      <Container>
        <Left ref={workRef}>
          <CanvasBlob />
          <WorkComponent contactRef={contactRef} />
        </Left>
        <Right>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => handleListItemClick(item)}>
                {item}
              </ListItem>
            ))}
          </List>
          {/* <SectionName>Pakiety</SectionName> */}
        </Right>
      </Container>
    </Section>
  );
});

export default Packages;

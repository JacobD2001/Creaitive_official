import React, { useState, forwardRef, Suspense } from "react";
import styled from "styled-components";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasBlob from "./3d_models/CanvasBlob";

//import services components
import BusinessAutomation from "./packages_components/businessAutomation";
import BusinessInfluence from "./packages_components/businessInfluence";
import DigitalPresence from "./packages_components/digitalPresence";
import fullComfort from "./packages_components/fullComfort";

const data = [
    "Pakiet Digital Presence",
    "Pakiet Full Comfort",
    "Pakiet Business Influence",

"Pakiet Business Automation",
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
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.5px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #da4ea2;
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
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

//component to map
const packagesMapComponent = {
    "Pakiet Digital Presence": DigitalPresence,
    "Pakiet Full Comfort": fullComfort,
    "Pakiet Business Influence": BusinessInfluence,

"Pakiet Business Automation": BusinessAutomation,
};

const Packages = forwardRef((props, ref) => {
  const [work, setWork] = useState(data[0]);
  const WorkComponent = packagesMapComponent[work];

  return (
    <Section ref={ref}>
      <Container>
        <Left>
         <CanvasBlob/>
          <WorkComponent />
        </Left>
        <Right>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Right>
      </Container>
    </Section>
  );
});

export default Packages;

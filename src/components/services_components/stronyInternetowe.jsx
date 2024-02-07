import React, {Suspense} from "react";
import styled, { keyframes } from "styled-components";
import { Canvas } from "@react-three/fiber";
//import { OrbitControls, Stage } from "@react-three/drei";
//import Console from "../3d_models/console";

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

const WorkComponentContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
`;

const KeyPointsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 20px;
  width: 100%;
  margin-top: 70px;
  z-index: 2; // Add this line
`;

const KeyPointColumn = styled.div`
  flex-basis: calc(50% - 10px);
  padding: 0 10px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 700;
  width: 200px;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: auto; // Add this line to center the button
  display: block; // Add this line to center the button
  animation: ${pulseAnimation} 5s infinite;
  z-index: 2; // Add this line
`;

const Title = styled.h1`
  font-size: 35px;
  color: #da4ea2;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: lightgray;
`;

const StyledCanvas = styled(Canvas)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0; // Set z-index to 0 to place it behind the text and button
`;


const StronyInternetowe = () => {
  return (
    <WorkComponentContainer>
      {/* <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
        <Suspense fallback={null} >
        <Stage environment="city" intensity={0.6}>
          <Console />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={50} />
        </Suspense>
      </Canvas> */}
      <KeyPointsContainer>
        <KeyPointColumn style={{ gridArea: "1 / 1 / span 1 / span 1" }}>
          {/* Key Point 1 */}
          <Title>Projekt </Title>
          <Subtitle>
            Wykonamy projekt strony internetowej szyty na miarę twojego biznesu
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn
          style={{ gridArea: "1 / 2 / span 1 / span 1", margin: "auto" }}
        >
          {/* Key Point 2 */}
          <Title>Funkcjonalność</Title>
          <Subtitle>
            Sprawimy aby twoja strona internetowa była w pełni funkcjonalna
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn style={{ gridArea: "2 / 1 / span 1 / span 1" }}>
          {/* Key Point 3 */}
          <Title>Personalizacja</Title>
          <Subtitle>
            Dostosujemy funkcjonalność witryny internetowej w pełni do twoich
            potrzeb
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn style={{ gridArea: "2 / 2 / span 1 / span 1" }}>
          {/* Key Point 3 */}
          <Title>Responsywność</Title>
          <Subtitle>
            Stworzymy w pełni responsywną stronę, dopasowaną do każdego
            urządzenia
          </Subtitle>
        </KeyPointColumn>

        <Button style={{ gridArea: "3 /1 / span 1/ span 2" }}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>

      {/* Call to Action Button */}
    </WorkComponentContainer>
  );
};
export default StronyInternetowe;

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
  justify-content: center;
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

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr; // Switch to a single column layout
  }
`;

const KeyPointColumn = styled.div`
  flex-basis: 100%; // Change to 100% to take full width
  padding: 0 10px;
  font-size: 20px;
  margin-bottom: 20px;

  @media only screen and (min-width: 769px) {
    flex-basis: calc(50% - 10px); // Reapply for larger screens
  }
`;


const Button = styled.button`
  background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
  color: white;
  font-weight: 700;
  width: 200px;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  animation: ${pulseAnimation} 5s infinite;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    width: 200px;
    margin: 20px auto; // Adjust margin for vertical spacing on smaller screens
  }

  @media only screen and (min-width: 769px) {
    grid-column: span 2; // Span 2 columns
    margin: 20px auto; // Center the button between the columns
  }
`;



const Title = styled.h1`
  font-size: 35px;
  background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;

  @keyframes flip {
    0%,80% {
      transform: rotateY(360deg) 
    }

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
        <KeyPointColumn>
          {/* Key Point 1 */}
          <Title>Projekt </Title>
          <Subtitle>
            Wykonamy projekt strony internetowej szyty na miarę twojego biznesu
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn
         
        >
          {/* Key Point 2 */}
          <Title>Funkcjonalność</Title>
          <Subtitle>
            Sprawimy aby twoja strona internetowa była w pełni funkcjonalna
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          {/* Key Point 3 */}
          <Title>Personalizacja</Title>
          <Subtitle>
            Dostosujemy funkcjonalność witryny internetowej w pełni do twoich
            potrzeb
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn >
          {/* Key Point 3 */}
          <Title>Responsywność</Title>
          <Subtitle>
            Stworzymy w pełni responsywną stronę, dopasowaną do każdego
            urządzenia
          </Subtitle>
        </KeyPointColumn>

        <Button>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>

      {/* Call to Action Button */}
    </WorkComponentContainer>
  );
};
export default StronyInternetowe;


//experiment with animation for text
// const fadeInAnimation = keyframes`
//   to {
//     opacity: 1;
//     filter: blur(0);
//   }
// `;


// const AnimatedTitle = styled(Title)`
//   ::after {
//     content: "${(props) => props.children}";
//     position: absolute;
//     top: 0;
//     left: 0;
//     color: pink;
//     width: 0px;
//     overflow: hidden;
//     white-space: nowrap;
//   }

//   &:hover {
//     ::after {
//       animation: ${fadeInAnimation} 0.8s linear both;
//     }
//   }
// `;

// const AnimatedSubtitle = styled(Subtitle)`
//   ::after {
//     content: "${(props) => props.children}";
//     position: absolute;
//     top: 0;
//     left: 0;
//     color: pink;
//     width: 0px;
//     overflow: hidden;
//     white-space: nowrap;
//   }

//   &:hover {
//     ::after {
//       animation: ${fadeInAnimation} 0.8s linear both;
//     }
//   }
// `;




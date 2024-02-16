import React from "react";
import { WorkComponentContainer, KeyPointsContainer, KeyPointColumn, Button, Title, Subtitle } from "../styled_components/workComponentServicesStyledComponents";
// import styled, { keyframes } from "styled-components";

// const pulseAnimation = keyframes`
//   0% {
//     transform: scale(1);
//     box-shadow: 0 0 0 0px rgba(218, 78, 162, 0.7);
//   }
//   50% {
//     transform: scale(1.05);
//     box-shadow: 0 0 0 15px rgba(218, 78, 162, 0);
//   }
//   100% {
//     transform: scale(1);
//     box-shadow: 0 0 0 0px rgba(218, 78, 162, 0.7);
//   }
// `;



const StronyInternetowe = ({contactRef}) => {

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WorkComponentContainer>

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

{/* <KeyPointColumn> */}
        <Button onClick={() => scrollToContact(contactRef)}>Porozmawiajmy</Button>
        {/* </KeyPointColumn> */}
        {/* <KeyPointColumn>
        <Button onClick={() => scrollToContact(contactRef)}>Dowiedz się więcej</Button>
        </KeyPointColumn> */}

      </KeyPointsContainer>

      {/* Call to Action Button */}
    </WorkComponentContainer>
  );
};
export default StronyInternetowe;



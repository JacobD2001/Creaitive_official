import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";

const businessInfluence = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WorkComponentContainer>
      <KeyPointsContainer>
        <KeyPointColumn>
          <Title>Witryna Internetowa</Title>
          <Subtitle>
            Kompleksowe rozwiązanie obejmujące projekt i budowę strony
            internetowej
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Inteligenty Chatbot</Title>
          <Subtitle>
            Implementacja chatbota dostosowanego do unikalnych potrzeb Twojej
            firmy
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Ambasadorzy Marki</Title>
          <Subtitle>
            Włączamy do strategii marketingowej spersonalizowanych influencerów
          </Subtitle> 
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Pełne Prowadzenie</Title>
          <Subtitle>
            Kompleksowe zarządzanie Twoimi profilami na mediach
            społecznościowych
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default businessInfluence;

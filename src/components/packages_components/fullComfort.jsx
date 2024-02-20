import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";

const fullComfort = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WorkComponentContainer>
      <KeyPointsContainer>
        <KeyPointColumn>
          <Title>Pełne Prowadzenie</Title>
          <Subtitle>
            Kompleksowe zarządzanie Twoimi profilami na mediach
            społecznościowych
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Treści Graficzne</Title>
          <Subtitle>
            Pełna opieka pod względem graficznym, tworzenie i publikacja treści
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Treści Video</Title>
          <Subtitle>
            Pełna opieka pod względem video, tworzenie i publikacja treści
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Prowadzenie Kampanii</Title>
          <Subtitle>
            Prowadzenie kampanii reklamowych na mediach społecznościowych
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default fullComfort;

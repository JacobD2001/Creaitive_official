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
          <Title>Pełne Prowadzenie</Title>
          <Subtitle>
            Kompleksowe zarządzanie Twoimi profilami na mediach
            społecznościowych
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Treści Graficzne</Title>
          <Subtitle>
            Nielimitowane tworzenie i publikacja treści graficznych i wideo
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Prowadzenie Kampanii</Title>
          <Subtitle>
          Prowadzenie kampanii reklamowych na mediach społecznościowych
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Pełna Opieka</Title>
          <Subtitle>
            Kompleksowa opieka przez cały proces tworzenia i utrzymania strony
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

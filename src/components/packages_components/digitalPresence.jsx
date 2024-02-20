import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";

const digitalPresence = ({ contactRef }) => {
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
          <Title>Graficzne Treści</Title>
          <Subtitle>
            Dodatkowo otrzymasz graficzne treści idealnie pasujące do Twojej
            strony
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
      </KeyPointsContainer>{" "}
    </WorkComponentContainer>
  );
};
export default digitalPresence;

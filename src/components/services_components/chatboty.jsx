import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";

const Chatboty = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WorkComponentContainer>
      <KeyPointsContainer>
        <KeyPointColumn>
          <Title>Implementacja</Title>
          <Subtitle>
            Wdrożymy chatbota dostosowanego do Twojej strony lub
            komunikatora
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Personalizacja</Title>
          <Subtitle>
            Dostosujemy chatbota do unikalnych potrzeb Twojej marki
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Szkolenie</Title>
          <Subtitle>
            Nauczymy chatbota, odpowiadać na pytania zgodnie z twoimi potrzebami
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Integracja</Title>
          <Subtitle>
            Zintegrujemy chatbota z różnymi platformami i komunikatorami 
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default Chatboty;

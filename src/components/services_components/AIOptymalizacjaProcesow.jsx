import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";

const AIOptymalizacjaProcesow = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WorkComponentContainer>
      <KeyPointsContainer>
        <KeyPointColumn>
          <Title>Analiza</Title>
          <Subtitle>
            Dokonamy szczegółowej analizy procesów w twojej organizacji
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Optymalizacja</Title>
          <Subtitle>
            Zoptymalizujemy istniejące procesy, poprzez konkretne narzędzia
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Automatyzacja</Title>
          <Subtitle>
            Wproawdzimy konkretne rozwiązania oparte na sztucznej inteligencji
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Monitorowanie</Title>
          <Subtitle>
            Zaopiekujemy się wdrożonymi rozwiązaniami, monitorując ich efekty
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default AIOptymalizacjaProcesow;

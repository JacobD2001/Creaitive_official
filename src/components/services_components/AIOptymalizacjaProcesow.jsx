import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";
import { useSpring, animated, config } from "react-spring";

const AIOptymalizacjaProcesow = ({ contactRef, isVisible }) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000}, 
  });

  return (
    <WorkComponentContainer style={fadeInAnimation}>
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

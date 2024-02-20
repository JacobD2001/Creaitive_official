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
          <Title>Analiza Procesów</Title>
          <Subtitle>
            Dokładnie przeanalizujemy procesy w Twojej firmie, aby zidentyfikować obszary do optymalizacji
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Optymalizacja</Title>
          <Subtitle>
            Zoptymalizujemy istniejące procesy, eliminując zbędne kroki i
            identyfikując obszary do usprawnienia
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Automatyzacja</Title>
          <Subtitle>
            Wprowadzimy rozwiązania oparte na sztucznej inteligencji, aby
            zautomatyzować powtarzalne zadania i przyspieszyć procesy
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Monitorowanie</Title>
          <Subtitle>
            Stworzymy narzędzia do monitorowania efektywności optymalizacji oraz
            generowania raportów dla lepszego zarządzania twoim biznesem
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

import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";

const StronyInternetowe = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WorkComponentContainer>
      <KeyPointsContainer>

        <KeyPointColumn>
          <Title>Projekt </Title>
          <Subtitle>
            Wykonamy projekt strony internetowej szyty na miarę twojego biznesu
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Funkcjonalność</Title>
          <Subtitle>
            Sprawimy aby twoja strona internetowa była w pełni funkcjonalna
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Personalizacja</Title>
          <Subtitle>
            Dostosujemy funkcjonalność witryny internetowej w pełni do twoich
            potrzeb
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Responsywność</Title>
          <Subtitle>
            Stworzymy w pełni responsywną stronę, dopasowaną do każdego
            urządzenia
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>

      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default StronyInternetowe;

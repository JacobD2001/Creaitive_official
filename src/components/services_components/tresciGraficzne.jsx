import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";

const tresciGraficzne = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WorkComponentContainer>
      <KeyPointsContainer>
        <KeyPointColumn>
          <Title>Kampanie marketingowe</Title>
          <Subtitle>
            Tworzymy unikatowe i kreatywne treści graficzne dostosowane do
            Twoich potrzeb marketingowych
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Social Media</Title>
          <Subtitle>
            Tworzymy treści graficzne zoptymalizowane pod kątem różnych platform
            social media, zapewniając spójny wizerunek marki na różnych kanałach
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Okładki</Title>
          <Subtitle>
            Tworzymy profesjonalne okładki do Twoich produktów, e-booków czy
            innych materiałów
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Zdjęcia Produktowe</Title>
          <Subtitle>
            Wykorzystujemy narzędzia oparte na sztucznej inteligencji aby
            stworzyć profesjonalne zdjęcia produktowe obniżając tym samym koszty
            a zwiększając jakość wykonania
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default tresciGraficzne;

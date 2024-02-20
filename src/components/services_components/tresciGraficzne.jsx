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
          <Title>Kampanie</Title>
          <Subtitle>
            Stworzymy unikatowe grafiki dostosowane do
            twoich kampanii
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Social Media</Title>
          <Subtitle>
            Treści graficzne zapewniające spójność wizerunku marki w social media
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Okładki</Title>
          <Subtitle>
            Tworzymy profesjonalne okładki do twoich produktów oraz e-booków 
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Zdjęcia Produktowe</Title>
          <Subtitle>
            Tworzymy profesjonalne zdjęcia produktowe przy użyciu narzędzi AI
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

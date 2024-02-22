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

const krotkieVideo = ({ contactRef, isVisible }) => {
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
          <Title>Shorty</Title>
          <Subtitle>
            Krótkie i dynamiczne filmy, idealne na różne platformy social media
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Voice covery</Title>
          <Subtitle>
            Krótkie filmy z narracją, idealne do prezentacji produktów i usług
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Video Reklamy</Title>
          <Subtitle>
            Krótkie reklamy, które przyciągną zainteresowanie Twoją
            marką
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Teledyski</Title>
          <Subtitle>
            Unikalne teledyski, które przyciągną uwagę widzów i
            wyróżnią Twoją markę
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>{" "}
    </WorkComponentContainer>
  );
};
export default krotkieVideo;

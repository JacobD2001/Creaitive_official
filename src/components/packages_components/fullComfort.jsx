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

const fullComfort = ({ contactRef, isVisible }) => {
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
          <Title>Kompletna Witryna</Title>
          <Subtitle>
            W pełni funkcjonalna strona internetowa z wytrenowanym chatbotem
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Treści Graficzne</Title>
          <Subtitle>
            Tworzenie i publikacja treści graficznych i wideo na stronę i social media
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
export default fullComfort;

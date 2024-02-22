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

const digitalPresence = ({ contactRef, isVisible }) => {
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
          {/* Porozmawiajmy Porównaj pakiety treść buttona */}
        </Button> 
      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default digitalPresence;

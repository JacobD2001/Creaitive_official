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


const indywidualneRozwiazania = ({ contactRef, isVisible }) => {
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
          <Title>Personalizacja</Title>
          <Subtitle>
            Kreujemy indywidualne rozwiązania, dostosowane do
            Twoich potrzeb 
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Analiza</Title>
          <Subtitle>
            Przeprowadzimy szczegółową analizę, aby zrozumieć Twoje potrzeby
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Elastyczność</Title>
          <Subtitle>
            Stworzymy elastyczne rozwiązania, które będą rozwijać się wraz z Twoją firmą
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Innowacje</Title>
          <Subtitle>
            Wdrażamy najnowsze technologie, aby Twoja firma była na bieżąco
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default indywidualneRozwiazania;

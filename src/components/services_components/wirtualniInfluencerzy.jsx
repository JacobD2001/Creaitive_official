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

const wirtualniInfluencerzy = ({ contactRef, isVisible }) => {
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
            Influencerzy dostosowani do wizerunku i wartości Twojej marki
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Specjalizacja</Title>
          <Subtitle>
            Ty decydujesz o niszy i charakterze wirtualnego influencera
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Followersi</Title>
          <Subtitle>
            Zapewniamy budowę bazy followersów zgodnie z wytycznymi klienta
          </Subtitle>
        </KeyPointColumn>

        <KeyPointColumn>
          <Title>Ambasador Marki</Title>
          <Subtitle>
            Tworzymy twarz twojej marki, która promuje produkty i usługi
          </Subtitle>
        </KeyPointColumn>

        <Button onClick={() => scrollToContact(contactRef)}>
          Porozmawiajmy
        </Button>
      </KeyPointsContainer>
    </WorkComponentContainer>
  );
};
export default wirtualniInfluencerzy;

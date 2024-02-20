import React from "react";
import {
  WorkComponentContainer,
  KeyPointsContainer,
  KeyPointColumn,
  Button,
  Title,
  Subtitle,
} from "../styled_components/workComponentServicesStyledComponents";

const wirtualniInfluencerzy = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WorkComponentContainer>
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

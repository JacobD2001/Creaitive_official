import React, { useState, forwardRef } from "react";
import styled from "styled-components";

//import services components
import BudowanieInfluencerek from "./services_components/budowanieInfluencerek";
import GraficznyContent from "./services_components/graficznyContent";
import IndywidualneRozwiazania from "./services_components/indywidualneRozwiazania";
import IndywidualneWdrozeniaAI from "./services_components/indywidualneWdrozeniaAI";
import Chatboty from "./services_components/chatboty";
import ShortVideoContent from "./services_components/shortVideoContent";
import StronyInternetowe from "./services_components/stronyInternetowe";

// TO DO: Adjust 'data' based on business needs
const data = [
  "Strony Internetowe",
  "Chatboty", //Integracje AI komponent
  "AI w optymalizacji procesów", //Indywidualne Wdrożenia AI komponent
  "Treści Graficzne", //Graficzny Content komponent
  "Krótkie Video", //Short Video Content komponent
  "Wirtualni Influencerzy", //Budowanie Influencerek komponent
  "Indywidualne Rozwiązania",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

//component to map
const servicesMapComponent = {
  "Strony Internetowe": StronyInternetowe,
  "Chatboty": Chatboty,
  "Indywidualne Wdrożenia AI": IndywidualneWdrozeniaAI,
  "Graficzny Content": GraficznyContent,
  "Short Video Content": ShortVideoContent,
  "Budowanie Influencerek": BudowanieInfluencerek,
  "Indywidualne Rozwiązania": IndywidualneRozwiazania,
};

const Services = forwardRef((props, ref) => {

  const [work, setWork] = useState(data[0]);
  const WorkComponent = servicesMapComponent[work];

  return (
    <Section ref={ref}>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <WorkComponent />
        </Right>
      </Container>
    </Section>
  );
});

export default Services;

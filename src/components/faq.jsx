import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 1023px) {
    text-align: center;
  }
`;

const FaqContent = styled.div`
  font-weight: 200;
  margin-top: 20px;
`;

 const FaqSection = styled.div`
  height: 100vh;
  scroll-snap-align: center; /*na chwile none potem center*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

    
  /* Low-Resolution Tablets and iPads and mobiles */
  @media only screen and (max-width: 1023px) {
    scroll-snap-align: none;
  }
`;


 const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
position: relative;

@media only screen and (max-width: 1023px) {
 display: none; /*TO DO: TEMPORARY SOLUTION*/
}
`;


const Right = styled.div`
  flex: 2;
  position: relative;
  @media only screen and (max-width: 1023px) {
    flex: 1;
    width: 80%;
  }
`;

const Dropdown = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
 color: white;
  color: white;
  border-radius: 10px; // Add this line
`;

const DropdownIcon = styled.div`
  font-size: 18px;
`;

const Answer = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  padding: 10px;
  background-color: #29075B;
  border-radius: 10px; // Add this line
`;
const Img = styled.img`
  width: 80%;
  max-width: 800px;
  height:auto;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 1023px) {
   display: none;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Faq = forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Jak mogę się z wami skontaktować?",
      answer: "Zadzwoń do nas pod numer 111111111 lub napisz na adres mailowy: info@example.com",
    },
    {
      question: "Ile to kosztuje?",
      answer: "Nasze usługi są wyceniane indywidualnie, w zależności od twoich potrzeb. Skontaktuj się z nami, a my przygotujemy dla Ciebie atrakcyjną ofertę.",
    },
    {
      question: "Czy mogę zobaczyć przykładowe realizacje?",
      answer: "Oczywiście. Na naszej stronie znajdziesz przykłady naszej pracy. Jeśli chcesz zobaczyć więcej, skontaktuj się z nami pod numer 111111111 lub napisz na adres mailowy: info@example.com",
    },
    {
      question: "Jaką mam gwarancję jakości?",
      answer: "Oferujemy gwarancję na nasze usługi, omawiając nasze projekty i wdrażając je dopiero po Twoim zatwierdzeniu. W razie jakichkolwiek problemów, jesteśmy do twojej dyspozycji.",
    },
    {
      question: "Czy mogę liczyć na wsparcie techniczne i utrzymywanie wdrażanych usług?",
      answer: "Oczywiście. Liczymy na długotrwałą współpracę z naszymi klientami. Oferujemy wsparcie techniczne i utrzymywanie wdrażanych usług.",
    },
    // Add more questions and answers as needed
  ];

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <FaqSection ref={ref}>
      <Container>
        <Left>
        <Img src="./img/moon.png" />

          </Left>
        <Right>
          <Title>Masz pytania?</Title>
          <FaqContent>
            {faqItems.map((item, index) => (
              <Dropdown key={index}>
                <Summary onClick={() => handleDropdownClick(index)}>
                  {item.question}
                  <DropdownIcon>{openIndex === index ? '▲' : '▼'}</DropdownIcon>
                </Summary>
                <Answer open={openIndex === index}>{item.answer}</Answer>
              </Dropdown>
            ))}
          </FaqContent>
        </Right>
      </Container>
    </FaqSection>
    
  );
});

export default Faq;

import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';


const FaqSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal-sized columns */
  height: 100vh; /* Adjust the height as needed */
  padding: 20px;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for smaller screens */
    height: 120vh; /* Adjust the height for smaller screens */
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const FaqContent = styled.div`
  font-weight: 200;
  margin-top: 20px;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
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
  background-color: #da4ea2;
  color: white;
`;

const DropdownIcon = styled.div`
  font-size: 18px;
`;

const Answer = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  padding: 10px;
  background-color: #3d1c56;
`;

const Faq = forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is the meaning of life?",
      answer: "Answer 1: 42.",
    },
    {
      question: "How to use styled components in React?",
      answer: "Answer 2: Install styled-components, create a styled component, and use it in your components.",
    },
    {
      question: "Is React better than Angular?",
      answer: "Answer 3: It depends on the project requirements and personal preference. React is more lightweight and flexible, while Angular provides a more opinionated framework.",
    },
    {
      question: "What are the advantages of using Redux?",
      answer: "Answer 4: Redux helps manage the state of your application in a predictable way, making it easier to debug and test. It also facilitates communication between components.",
    },
    {
      question: "How can I optimize the performance of my React app?",
      answer: "Answer 5: You can optimize performance by using React.memo, implementing code splitting, and optimizing render methods. Also, consider using PureComponent and useMemo for memoization.",
    },
    // Add more questions and answers as needed
  ];

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <FaqSection ref={ref}>
      <Container>
        <Left>{/* Content for the left column goes here */}</Left>
        <Right>
          <Title>Kto pyta nie błądzi...</Title>
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

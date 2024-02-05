import React, {forwardRef} from 'react';
import styled from 'styled-components';

const FaqSection = styled.div`
  height: 100vh; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  scroll-snap-align: center;


  @media only screen and (max-width: 768px) {
    height: 120vh; /* Adjust the height for smaller screens */
  }
`;

const FaqContainer = styled.div`
  width: 800px; /* Adjust the width as needed */
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 90%; /* Adjust for smaller screens */
  }
`;

const FaqTitle = styled.h2`
  font-size: 36px;
  color: #333;
`;

const FaqContent = styled.div`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
`;

const Faq = forwardRef((props, ref) => {
  return (
    <FaqSection ref={ref}>
      <FaqContainer>
        <FaqTitle>Frequently Asked Questions</FaqTitle>
        <FaqContent>
          {/* Add your FAQ content here */}
          <p>Question 1: What is the meaning of life?</p>
          <p>Answer 1: 42.</p>
          <p>Question 2: How to use styled components in React?</p>
          <p>Answer 2: Install styled-components, create a styled component, and use it in your components.</p>
          {/* Add more questions and answers as needed */}
        </FaqContent>
      </FaqContainer>
    </FaqSection>
  );
});

export default Faq;

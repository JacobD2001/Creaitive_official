// TO DO - HERE FROM YOUTUBE23
import React from 'react';
import styled from 'styled-components';

// Update ListItem styles
const ListItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #da4ea2; /* Match the color to your title */
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

// Update StronyInternetowe styles
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* Add styling for your 3D model or background here */
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const StyledLine = styled.img`
  height: 5px;
  margin-right: 10px; /* Adjust the margin as needed */
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 18px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 130px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Use StyledLine in the component
function StronyInternetowe() {
  return (
    <Container>
      {/* Add your 3D model or background here */}
        <Title>Strony Internetowe</Title>
        <WhatWeDo>
            <StyledLine src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
            <Subtitle>What we Do</Subtitle>
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Porozmawiajmy...</Button>
    </Container>
  );
}
export default StronyInternetowe;

import React, { forwardRef } from "react";
import styled, { keyframes } from 'styled-components';
import { moveLeftToRightAnimation } from "./styled_components/animations";

const RecommendsSection = styled.div`
  height: 10%; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  scroll-snap-align: start;
  overflow: hidden; /* Ensure overflow is hidden to hide the content outside the container */

  @media only screen and (max-width: 1280px) {
    scroll-snap-align: none;
  }
`;

const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${moveLeftToRightAnimation} 8s linear infinite; /* Adjust the duration and timing function as needed */
`;

const Logo = styled.img`
  width: 100px; /* Adjust the width of the logos */
  height: auto;
  margin: 10px;

  @media only screen and (max-width: 1280px) {
    width: 80px; /* Adjust for smaller screens */
  }
`;

const Text = styled.p`
font-weight: bold;
  margin-top: 10px; /* Adjust the margin as needed */
`;

const StyledLink = styled.a`
  color: white; // Change this to the color you want
  text-decoration: none; // Remove the underline

  &:hover {
    color: #888; // Change this to the color you want when hovering
  }
`;

const Recommend = forwardRef((props, ref) => {
  return (
      <RecommendsSection ref={ref}>
          <RecommendationContainer>
              <StyledLink href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <Logo src="./img/logo.png" alt="ADAD" />
                  <Text>Adad meble</Text>
              </StyledLink>
          </RecommendationContainer>
          <RecommendationContainer>
              <StyledLink href="https://adadmeble.pl/" target="_blank" rel="noopener noreferrer">
                  <Logo src="./img/logo.png" alt="AngryBunny" />
                  <Text>AngryBunny</Text>
              </StyledLink>
          </RecommendationContainer>
      </RecommendsSection>
  );
});
export default Recommend;

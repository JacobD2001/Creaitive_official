import React, { forwardRef } from "react";
import styled, { keyframes } from 'styled-components';

// Define the keyframe animation
const moveLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 1; // Start with the element fully visible
  }

  50% {
    transform: translateX(100%);
    opacity: 0; // Fade out halfway through the animation
  }

  51% {
    transform: translateX(100%);
    opacity: 0; // Keep the element on the right side and invisible
  }

  100% {
    transform: translateX(-100%);
    opacity: 1; // Move the element to the left and fade it back in
  }
`;

const RecommendsSection = styled.div`
  height: 110px; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  scroll-snap-align: start;
  overflow: hidden; /* Ensure overflow is hidden to hide the content outside the container */

  @media only screen and (max-width: 768px) {
    height: 120vh; /* Adjust the height for smaller screens */
    flex-direction: column;
  }
`;

const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${moveLeftToRight} 8s linear infinite; /* Adjust the duration and timing function as needed */
`;

const Logo = styled.img`
  width: 100px; /* Adjust the width of the logos */
  height: auto;
  margin: 10px;

  @media only screen and (max-width: 768px) {
    width: 80px; /* Adjust for smaller screens */
  }
`;

const Text = styled.p`
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
                  <Logo src="./img/logo.png" alt="Company 1" />
                  <Text>Llama the dev</Text>
              </StyledLink>
          </RecommendationContainer>
          <RecommendationContainer>
              <StyledLink href="https://adadmeble.pl/" target="_blank" rel="noopener noreferrer">
                  <Logo src="./img/search.png" alt="Company 2" />
                  <Text>ADAD</Text>
              </StyledLink>
          </RecommendationContainer>
          <RecommendationContainer>
              <StyledLink href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <Logo src="./img/search.png" alt="Company 3" />
                  <Text>Company 3</Text>
              </StyledLink>
          </RecommendationContainer>
          {/* Add more logos and text as needed */}
      </RecommendsSection>
  );
});
export default Recommend;

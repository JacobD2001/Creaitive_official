import React, { forwardRef } from "react";
import styled, { keyframes } from 'styled-components';

// Define the keyframe animation
const moveLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(100%);
    opacity: 0; /* Fade out halfway through the animation */
  }

  51% {
    transform: translateX(-100%);
    opacity: 0; /* Start fading in immediately after reaching the right side */
  }

  100% {
    transform: translateX(100%);
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

const Recommend = forwardRef((props, ref) => {
    return (
        <RecommendsSection ref={ref}>
            <RecommendationContainer>
                <Logo src="./img/logo.png" alt="Company 1" />
                <Text>Llama the dev</Text>
            </RecommendationContainer>
            <RecommendationContainer>
                <Logo src="./img/search.png" alt="Company 2" />
                <Text>Company 2</Text>
            </RecommendationContainer>
            <RecommendationContainer>
                <Logo src="./img/search.png" alt="Company 3" />
                <Text>Company 3</Text>
            </RecommendationContainer>
            {/* Add more logos and text as needed */}
        </RecommendsSection>
    );
});

export default Recommend;

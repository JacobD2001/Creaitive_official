import React, { forwardRef } from "react";
import styled from 'styled-components';

const RecommendsSection = styled.div`
  height: 60vh; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  scroll-snap-align: center;


  @media only screen and (max-width: 768px) {
    height: 120vh; /* Adjust the height for smaller screens */
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 100px; /* Adjust the width of the logos */
  height: auto;
  margin: 10px;

  @media only screen and (max-width: 768px) {
    width: 80px; /* Adjust for smaller screens */
  }
`;

const Recommend = forwardRef((props, ref) => {
    return (
        <RecommendsSection ref={ref}>
            <Logo src="./img/search.png" alt="Company 1" />
            <p>Company 1</p>
            <Logo src="./img/search.png" alt="Company 2" />
            <p>Company 2</p>
            <Logo src="./img/search.png" alt="Company 3" />
            <p>Company 3</p>
            {/* Add more logos and text as needed */}
        </RecommendsSection>
    );
});

export default Recommend;

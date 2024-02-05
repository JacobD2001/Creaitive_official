import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
height: 50px; /* Adjust the height as needed */
color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;

`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <div>This is footer ssssssssssss</div>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      {/* Add additional footer content or links as needed */}
    </FooterSection>
  );
};

export default Footer;

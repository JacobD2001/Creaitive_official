import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%; /* Adjust the height as needed */
  color: white;
  text-align: center;
  scroll-snap-align: center;

  @media only screen and (max-width: 1280px) {
    scroll-snap-align: none;
  }

`;

const Separator = styled.hr`
  font-weight: 200;
  width: 80%;
  height: 2px;
  background-color: white;
  margin: 10px 0;
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
`;

const BigText = styled.h1`
font-size: 30px;
color: white;

@media only screen and (max-width: 1280px) {
  text-align: center;
}
  margin-bottom: 10px;
`;

const Title = styled.h2`
span {
  background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
}

  margin-bottom: 5px;
  text-align: left;

  @media only screen and (max-width: 1280px) {
    text-align: left;
  }
`;

const Link = styled.a`
font-size: 16px;
color: lightgray;
  text-decoration: none;
  margin: 5px 0;
  @media only screen and (max-width: 1280px) {
    text-align: left;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <BigText>Porozmawiajmy</BigText>
      <Separator />
      <ColumnsContainer>
        <Column>
          <Title><span>Kontakt</span></Title>
          <Link href="mailto:info@example.com">info@example.com</Link>
          <Link>+48 888 999 888</Link>
        </Column>
        <Column>
          <Title><span>Media</span></Title>
          {/* Add your social media icons/links here */}
          <Link href="#">Instagram</Link>
          <Link href="#">Tiktok</Link>
          <Link href="#">X</Link>
        </Column>
        <Column>
          <Title><span>Inne</span></Title>
          <Link href="https://lpcreation.pl/Polityka.pdf" target='_blank' rel="noopener noreferrer">Polityka prywatności</Link>
        </Column>
      </ColumnsContainer>
    </FooterSection>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";

//styled components
const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = ({ introRef, servicesRef, contactRef, recommendRef, faqRef }) => {
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem onClick={() => scrollToSection(introRef)}>O nas</ListItem>
            <ListItem onClick={() => scrollToSection(servicesRef)}>Usługi</ListItem>
            <ListItem onClick={() => scrollToSection(contactRef)}>Kontakt</ListItem>
            <ListItem onClick={() => scrollToSection(recommendRef)}>Polecają nas</ListItem>
            <ListItem onClick={() => scrollToSection(faqRef)}>FAQ</ListItem>
          </List>
        </Links>
        <Icons></Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

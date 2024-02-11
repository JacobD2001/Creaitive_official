import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

//styled components
const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10000; // Increase this value if the navbar is behind some elements

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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    margin: 0;
    color: lightgray;
    list-style: none;

  }
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

const MenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: white; // Change this to a color that stands out against your background
  z-index: 10002;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;


const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("./img/bg.jpeg");
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10001; // Make sure this is higher than the z-index of the navbar

  @media only screen and (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`;

const Navbar = ({ introRef, servicesRef, packagesRef, contactRef, recommendRef, faqRef }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleItemClick = (ref) => {
    scrollToSection(ref);
    setIsMobileMenuOpen(false);
  };

  return (
    <Section>
      <Container>
      <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
  {isMobileMenuOpen ? 'X' : '☰'}
</MenuButton>
<MobileMenu isOpen={isMobileMenuOpen}>
  <ListItem onClick={() => handleItemClick(introRef)}>O nas</ListItem>
  <ListItem onClick={() => handleItemClick(servicesRef)}>Usługi</ListItem>
  <ListItem onClick={() => handleItemClick(packagesRef)}>Pakiety</ListItem> 
  <ListItem onClick={() => handleItemClick(contactRef)}>Kontakt</ListItem>
  <ListItem onClick={() => handleItemClick(recommendRef)}>Polecają nas</ListItem>
  <ListItem onClick={() => handleItemClick(faqRef)}>FAQ</ListItem>
</MobileMenu>
        <Links>
          <Logo onClick={() => scrollToSection(introRef)} src="./img/logo.png" /> 
          <List>
            <ListItem onClick={() => scrollToSection(introRef)}>O nas</ListItem>
            <ListItem onClick={() => scrollToSection(servicesRef)}>Usługi</ListItem>
            <ListItem onClick={() => scrollToSection(packagesRef)}>Pakiety</ListItem> 
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

//TO DO: LOGO DO ZMIANY XDD
export default Navbar;


// TO DO: This is for animating the navbar on scorll and click but not works for now
// const Navbar = ({ introRef, servicesRef, contactRef, recommendRef, faqRef }) => {
//   const [activeSection, setActiveSection] = useState(null);

//   const scrollToSection = (ref, section) => {
//     if (ref && ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(section);
//     }
//   };

//   return (
//     <Section>
//       <Container>
//         <Links>
//           <Logo onClick={() => scrollToSection(introRef, 'intro')} src="./img/logo.png" />
//           <List>
//             <ListItem
//               onClick={() => scrollToSection(introRef, 'intro')}
//               style={{ color: activeSection === 'intro' ? '#da4ea2' : 'inherit' }}
//             >
//               O nas
//             </ListItem>
//             <ListItem
//               onClick={() => scrollToSection(servicesRef, 'services')}
//               style={{ color: activeSection === 'services' ? '#da4ea2' : 'inherit' }}
//             >
//               Usługi
//             </ListItem>
//             <ListItem
//               onClick={() => scrollToSection(contactRef, 'contact')}
//               style={{ color: activeSection === 'contact' ? '#da4ea2' : 'inherit' }}
//             >
//               Kontakt
//             </ListItem>
//             <ListItem
//               onClick={() => scrollToSection(recommendRef, 'recommend')}
//               style={{ color: activeSection === 'recommend' ? '#da4ea2' : 'inherit' }}
//             >
//               Polecają nas
//             </ListItem>
//             <ListItem
//               onClick={() => scrollToSection(faqRef, 'faq')}
//               style={{ color: activeSection === 'faq' ? '#da4ea2' : 'inherit' }}
//             >
//               FAQ
//             </ListItem>
//           </List>
//         </Links>
//         <Icons></Icons>
//       </Container>
//     </Section>
//   );
// };

// export default Navbar;


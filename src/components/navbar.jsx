import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  NavSection,
  NavContainer,
  NavLinks,
  NavLogo,
  NavList,
  NavListItem,
  NavMenuButton,
} from "./styled_components/navbarStyledComponents";

//styled props components
const MobileMenu = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
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
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

const Navbar = ({
  introRef,
  servicesRef,
  packagesRef,
  contactRef,
  recommendRef,
  faqRef,
}) => {
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
    <NavSection>
      <NavContainer>
        <NavMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "X" : "☰"}
        </NavMenuButton>
        <MobileMenu isOpen={isMobileMenuOpen}>
          <NavListItem onClick={() => handleItemClick(introRef)}>
            O nas
          </NavListItem>
          <NavListItem onClick={() => handleItemClick(servicesRef)}>
            Usługi
          </NavListItem>
          <NavListItem onClick={() => handleItemClick(packagesRef)}>
            Pakiety
          </NavListItem>
          <NavListItem onClick={() => handleItemClick(contactRef)}>
            Kontakt
          </NavListItem>
          <NavListItem onClick={() => handleItemClick(recommendRef)}>
            Polecają nas
          </NavListItem>
          <NavListItem onClick={() => handleItemClick(faqRef)}>FAQ</NavListItem>
        </MobileMenu>
        <NavLinks>
          <NavLogo
            onClick={() => scrollToSection(introRef)}
            src="./img/creaitive_logo.png"
          />
          <NavList>
            <NavListItem onClick={() => scrollToSection(introRef)}>
              O nas
            </NavListItem>
            <NavListItem onClick={() => scrollToSection(servicesRef)}>
              Usługi
            </NavListItem>
            <NavListItem onClick={() => scrollToSection(packagesRef)}>
              Pakiety
            </NavListItem>
            <NavListItem onClick={() => scrollToSection(contactRef)}>
              Kontakt
            </NavListItem>
            <NavListItem onClick={() => scrollToSection(recommendRef)}>
              Polecają nas
            </NavListItem>
            <NavListItem onClick={() => scrollToSection(faqRef)}>
              FAQ
            </NavListItem>
          </NavList>
        </NavLinks>
      </NavContainer>
    </NavSection>
  );
};

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

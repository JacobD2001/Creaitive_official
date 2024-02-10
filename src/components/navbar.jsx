import React, { useState, useEffect, useRef } from "react";
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
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
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

  color: ${(props) => (props.isActive ? '#ff0000' : 'inherit')}; 
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

const Navbar = ({ parentRef }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0.5,
    });

    // Observe the parent container
    observer.observe(parentRef.current);

    return () => observer.disconnect();
  }, [parentRef]);
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo
            onClick={() => scrollToSection(introRef)}
            src="./img/logo.png"
          />
          <List>
          <ListItem isActive={activeSection === 'intro'} onClick={() => scrollToSection(introRef)}>O nas</ListItem>
<ListItem isActive={activeSection === 'services'} onClick={() => scrollToSection(servicesRef)}>Usługi</ListItem>
<ListItem isActive={activeSection === 'packages'} onClick={() => scrollToSection(packagesRef)}>Pakiety</ListItem> 
<ListItem isActive={activeSection === 'contact'} onClick={() => scrollToSection(contactRef)}>Kontakt</ListItem>
<ListItem isActive={activeSection === 'recommend'} onClick={() => scrollToSection(recommendRef)}>Polecają nas</ListItem>
<ListItem isActive={activeSection === 'faq'} onClick={() => scrollToSection(faqRef)}>FAQ</ListItem>

          </List>
        </Links>
        <Icons></Icons>
      </Container>
    </Section>
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

//librairies
import React, { useRef } from 'react';
import styled from "styled-components";

//components
import Intro from "../intro";
import Footer from "../footer";
import Contact from "../contact";
import FAQ from "../faq";
import Services from "../services";
import Packages from "../packages";
import Navbar from "../navbar";
import Recommend from "../recommend";



const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
color: white;
background: url("./img/bg.jpeg");
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
`

function Home() {
  const introRef = useRef();
  const servicesRef = useRef();
  const contactRef = useRef();
  const recommendRef = useRef();
  const faqRef = useRef();
  const packagesRef = useRef();

  return (
    <Container>
      <Navbar introRef={introRef} servicesRef={servicesRef} packagesRef={packagesRef} contactRef={contactRef} recommendRef={recommendRef} faqRef={faqRef} />
      <Intro ref={introRef} servicesRef={servicesRef} contactRef={contactRef} recommendRef={recommendRef} faqRef={faqRef} />   
      <Services ref={servicesRef} />
      <Packages ref={packagesRef}/>
      <Contact ref={contactRef} />
      <Recommend ref={recommendRef} />
      <FAQ ref={faqRef} />
      <Footer />
    </Container>
  );
}

export default Home;

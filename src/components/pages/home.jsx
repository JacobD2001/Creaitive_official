//librairies
import React, { useRef } from 'react';
import styled from "styled-components";

//components
//import Navbar from "../navbar";
import Intro from "../intro";
import Footer from "../footer";
import Contact from "../contact";
import FAQ from "../faq";
import Services from "../services";
import Recommend from "../recommend";
import Navbar from "../navbar";


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
  const servicesRef = useRef();

  return (
    <Container>
      <Intro servicesRef={servicesRef} />   
      <Services ref={servicesRef} />
      <Contact />
      <Recommend />
      <FAQ />
      <Footer />
    </Container>
  );
}

export default Home;

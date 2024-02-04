//librairies
import React from "react";
import styled from "styled-components";

//components
//import Navbar from "../navbar";
import Intro from "../intro";
import Footer from "../footer";
import Contact from "../contact";
import FAQ from "../faq";
import Services from "../services";
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
  return (
    <Container>
      <Intro />
      <Services />
      <Contact />
      <Recommend />
      <FAQ />
      <Footer />
    </Container>
  );
}

export default Home;

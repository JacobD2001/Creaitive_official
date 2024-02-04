//librairies
import React from "react";
import styled from "styled-components";

//components
import Navbar from "../navbar";
import Intro from "../intro";
import Footer from "../footer";
import Contact from "../contact";
import FAQ from "../faq";
import Services from "../services";
import Recommend from "../recommend";


const Container = styled.div`
display: flex;
flex-direction: column;
}
`

function Home() {
  return (
    <Container>
      <Navbar />
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

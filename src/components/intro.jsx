import React, { forwardRef } from "react";
import {
  Section,
  Container,
  Left,
  Title,
  WhatWeDo,
  Line,
  Subtitle,
  Desc,
  Button,
  Right,
  Img,
} from "./styled_components/introStyledComponents";
import CanvasBlob from "./3d_models/CanvasBlob";

const Intro = forwardRef((props, introRef) => {
  return (
    <Section ref={introRef}>
      <Container>
        <Left>
          <Title>
            Innovate. Integrate. <span>Inspire.</span>
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Tworzymy Witryny Zintegrowane z Przyszłością</Subtitle>
          </WhatWeDo>
          <Desc>
            W Creaitive tworzymy futurystyczne <span>witryny internetowe</span>,
            budujemy narzędzia oparte na <span>sztucznej inteligencji</span>,
            które pomagają w automatyzacji procesów w twojej firmie. Tworzymy
            treści <span>marketingowe</span>, które przyciągają klientów, dzięki
            czemu ty oszczędzasz <span>czas</span> i <span>pieniądze</span>.
          </Desc>
          <Button>Zobacz naszą ofertę</Button>
        </Left>
        <Right>
          {/* <CanvasBlob/> */}
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
});

export default Intro;

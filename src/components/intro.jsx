import React, { forwardRef } from "react";
import {
  IntroSection,
  IntroContainer,
  IntroLeft,
  IntroTitle,
  IntroWhatWeDo,
  IntroLine,
  IntroSubtitle,
  IntroDesc,
  IntroButton,
  IntroRight,
  IntroImg,
} from "./styled_components/introStyledComponents";
import CanvasBlob from "./3d_models/CanvasBlob";

const Intro = forwardRef((props, introRef) => {
  const { servicesRef } = props;

  const scrollToServices = () => {
    if (servicesRef && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <IntroSection ref={introRef}>
      <IntroContainer>
        <IntroLeft>
          <IntroTitle>
            Innovate. Integrate. <span>Inspire.</span>
          </IntroTitle>
          <IntroWhatWeDo>
            <IntroLine src="./img/line.png" />
            <IntroSubtitle>Tworzymy Witryny Zintegrowane z Przyszłością</IntroSubtitle>
          </IntroWhatWeDo>
          <IntroDesc>
            W Creaitive tworzymy futurystyczne <span>witryny internetowe</span>,
            budujemy narzędzia oparte na <span>sztucznej inteligencji</span>,
            które pomagają w automatyzacji procesów w twojej firmie. Tworzymy
            treści <span>marketingowe</span>, które przyciągają klientów, dzięki
            czemu ty oszczędzasz <span>czas</span> i <span>pieniądze</span>.
          </IntroDesc>
          <IntroButton onClick={() => scrollToServices(servicesRef)}>Zobacz naszą ofertę</IntroButton>
        </IntroLeft>
        <IntroRight>
          {/* <CanvasBlob/> */}
          <IntroImg src="./img/introPic.png" />
        </IntroRight>
      </IntroContainer>
    </IntroSection>
  );
});

export default Intro;

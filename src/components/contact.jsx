import React, { useRef, useState, forwardRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled, { keyframes } from "styled-components";
import Map from "./API_Components/Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; /*na chwile none potem center*/
  @media only screen and (max-width: 1023px) {
    margin-top: 200px;
    scroll-snap-align: none;
  }
`;
//in section margin top idk if it's responsive XD
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width: 1023px) {
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100vh;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  @media only screen and (max-width: 1023px) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  color: white;
  text-align: center;
  z-index: 100;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 2.0 em;
  margin-bottom: 10px;
  color: white;

  span {
    background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 1023px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

// const confettiAnimation = keyframes`
//   0% {
//     transform: translateY(0) rotate(0);
//   }
//   100% {
//     transform: translateY(-100vh) rotate(360deg);
//   }
// `;

// const ConfettiParticle = styled.div`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background-color: #cecd24;
//   clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//   animation: ${confettiAnimation} 1s ease-out infinite;
// `;

const Button = styled.button`
  position: relative;
  background: linear-gradient(45deg, #de2fac, #d73aae, #d335b0, #c82bb1, #b821b2, #ab17b3, #9f0db4, #9303b5);
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.6em;
  display: inline-block;
  text-transform: uppercase;
  padding: 0.5em 2em;
  transition: 0.02s 0.2s cubic-bezier(0.1, 0, 0.1, 1);

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #cecd24;
    transition: 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1),
      left 0.3s cubic-bezier(0.1, 0, 0.1, 1);
    z-index: -1;
  }

  &::after {
    content: "";
    display: inline-block;
    /*background-image: url("https://cdn-icons-png.flaticon.com/128/109/109617.png"); */
    background-image: url("/public/img/white_send.svg"); 
    position: absolute;
    top: 0;
    left: calc(100% - 3em);
    right: 3em;
    bottom: 0;
    background-size: 1.5em;
    background-repeat: no-repeat;
    background-position: center;
    transition: right 0.3s cubic-bezier(0.1, 0, 0.1, 1);
  }

  &:hover {
    padding: 0.5em 3.5em 0.5em 0.5em;

    &::before {
      left: calc(100% - 3em);
      right: 0;
      transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1),
        left 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }

    &::after {
      right: 0;
      transition: right 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 1023px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    color: white;
    text-align: center;
    width: 100%; /* Fill entire width */
    height: 100%; /* Fill entire height */
    z-index: 1;
  }

`;

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   border: none;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;
//   padding: 20px;
// `;


// const SendButton = () => {
//   const [confetti, setConfetti] = useState([]);

//   const handleClick = () => {
//     const newConfetti = Array.from({ length: 20 }, (_, index) => (
//       <ConfettiParticle key={index} style={{ left: `${Math.random() * 100}vw` }} />
//     ));
//     setConfetti(newConfetti);

//     // Reset confetti after a delay (adjust the delay as needed)
//     setTimeout(() => {
//       setConfetti([]);
//     }, 1000);
//   };
// };



const Contact = forwardRef((props, forwardedRef) => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g03wpak",
        "template_97fpdge",
        formRef.current,
        "VRWHO5fAEDZA2gjcC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          handleConfetti();
        }
      );
  };

  return (
    <Section ref={forwardedRef}>
      <Container>
        <Left>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>
              ZADZWOŃ <span>693 780 340</span> LUB WYPEŁNIJ FORMULARZ
            </Title>
            <Input placeholder="Imię" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Co chcesz nam przekazać?"
              name="message"
              rows={10}
            />
            <Button type="submit">WYŚLIJ</Button>
            {success &&
              "Dziękujemy, skontaktujemy się z Tobą tak szybko jak to możliwe."}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
});

export default Contact;

//https://lpcreation.pl/thx

// @keyframes confetti-slow {
//   0% {
//     transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
//  }
//   100% {
//     transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg);
//  }
// }
// @keyframes confetti-medium {
//   0% {
//     transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
//  }
//   100% {
//     transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg);
//  }
// }
// @keyframes confetti-fast {
//   0% {
//     transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
//  }
//   100% {
//     transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg);
//  }
// }
// .container {
//   width: 100vw;
//   max-width: 100vw;
//   height: 100vh;
// }
// .confetti-container {
//   perspective: 700px;
//   position: absolute;
//   overflow: hidden;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// }
// .confetti {
//   position: absolute;
//   z-index: 1;
//   top: -10px;
//   border-radius: 0%;
// }
// .confetti--animation-slow {
//   animation: confetti-slow 2.25s linear 1 forwards;
// }
// .confetti--animation-medium {
//   animation: confetti-medium 1.75s linear 1 forwards;
// }
// .confetti--animation-fast {
//   animation: confetti-fast 1.25s linear 1 forwards;
// }

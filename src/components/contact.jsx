import React, { useRef, useState, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import styled, { keyframes } from "styled-components";
import Map from "./API_Components/Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 2.0 em;
  margin-bottom: 10px;
  color: white;

  span {
    background: linear-gradient(45deg, #ed15a5, #db1d9c);
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

  @media only screen and (max-width: 768px) {
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

const sendButtonAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Button = styled.button`
  position: relative;
  background-color: #da4ea2;
  color: white;
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

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   border: none;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;
//   padding: 20px;
// `;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

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
        }
      );
  };
  return (
    <Section ref={forwardedRef}>
      <Container>
        <Left>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>
              ZADZWOŃ <span>606 704 195</span> LUB WYPEŁNIJ FORMULARZ -
              ODDZWONIMY!
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
              "Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce."}
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

import styled, { keyframes } from "styled-components";

export const NavSection = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10000; // Increase this value if the navbar is behind some elements

  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const NavContainer = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    padding: 10px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

export const NavLogo = styled.img`
  height: 50px;
  cursor: pointer;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavListItem = styled.li`
  cursor: pointer;
  color: lightgray;

  @media only screen and (max-width: 1280px) {
    font-size: 24px;
    margin: 0;
    color: lightgray;
    list-style: none;
  }
`;

export const NavMenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: white; 
  z-index: 10002;

  @media only screen and (max-width: 1280px) {
    display: block;
  }
`;

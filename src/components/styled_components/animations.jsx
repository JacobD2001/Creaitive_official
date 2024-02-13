import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";

export const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0px rgba(218, 78, 162, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(218, 78, 162, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0px rgba(218, 78, 162, 0.7);
  }
`;

export const moveUpAndDownAnimation = keyframes`
to {
    transform: translateY(20px);
  }
`;

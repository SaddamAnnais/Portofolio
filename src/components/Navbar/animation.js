import { keyframes } from "@emotion/react";

export const moveIn = keyframes`
  from {
    transform: translate(0px, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

import { keyframes } from 'styled-components';

export const scaleUp = keyframes`
  from { transform: scale(0.5) };
  to { transform: scale(1) };
`;

export const fadeIn = keyframes`
  from { opacity: 0 };
  to { opacity: 1 };
`;

export const fadeOut = keyframes`
  from { opacity: 1 };
  to { opacity: 0 };
`;

export const ripple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
`;

export const rotate = keyframes`
  0% {
    transform:rotate(0deg)
  }
  100% {
    transform:rotate(359deg)
  }
`;

export const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(.8);
  }
`;

export const placeholderAnimate = keyframes`
  0% {
    background-position: 650px 0;
  }
  100% {
    background-position: -650px 0;
  }
`;

export const shadows = keyframes`
  to { 
    box-shadow: 0px 0px 25px 8px;
    opacity: 0; 
  }
`;

export const pulse = keyframes`
0% {
  box-shadow: 0 0 0 0 rgba(0,112,224, 0.4);
}
70% {
    box-shadow: 0 0 0 10px rgba(0,112,224, 0);
}
100% {
    box-shadow: 0 0 0 0 rgba(0,112,224, 0);
}
  }
`;

export const dotPulse = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(0); }
`;

export const countdown = keyframes`
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 113px;
  }`;

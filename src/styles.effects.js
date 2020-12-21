import { css } from 'lit-element';

export const fadeIn = css`
  :host([effect="fade-in"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([effect="fade-in"][opened]) #content {
    opacity: 1;
  }
`;

export const fadeInScaleUp = css`
  :host([effect="fade-in-scale-up"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
  }

  :host([effect="fade-in-scale-up"][opened]) #content {
    opacity: 1;
  }

  :host([effect="fade-in-scale-up"][position="top"]) #content,
  :host([effect="fade-in-scale-up"][position="bottom"]) #content {
    transform: translateX(-50%) scale(0.7);
  }

  :host([effect="fade-in-scale-up"][position="top"][opened]) #content,
  :host([effect="fade-in-scale-up"][position="bottom"][opened]) #content {
    transform: translateX(-50%) scale(1);
  }

  :host([effect="fade-in-scale-up"][position="left"]) #content,
  :host([effect="fade-in-scale-up"][position="right"]) #content {
    transform: translateY(-50%) scale(0.7);
  }

  :host([effect="fade-in-scale-up"][position="left"][opened]) #content,
  :host([effect="fade-in-scale-up"][position="right"][opened]) #content {
    transform: translateY(-50%) scale(1);
  }
`;

export const fadeInSlide = css`
  :host([effect="fade-in-slide"]) #content {
    opacity: 0;
    transition: all var(--kemet-popover-transition-speed, 0.3s) cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }

  :host([effect="fade-in-slide"][opened]) #content {
    opacity: 1;
  }

  :host([effect="fade-in-slide"][position="top"]) #content {
    transform: translateX(-50%) translateY(20%);
  }

  :host([effect="fade-in-slide"][position="top"][opened]) #content {
    transform: translateX(-50%) translateY(0);
  }

  :host([effect="fade-in-slide"][position="bottom"]) #content {
    transform: translateX(-50%) translateY(-20%);
  }

  :host([effect="fade-in-slide"][position="bottom"][opened]) #content {
    transform: translateX(-50%) translateY(0);
  }

  :host([effect="fade-in-slide"][position="right"]) #content {
    transform: translateY(-50%) translateX(-20%);
  }

  :host([effect="fade-in-slide"][position="right"][opened]) #content {
    transform: translateY(-50%) translateX(0);
  }

  :host([effect="fade-in-slide"][position="left"]) #content {
    transform: translateY(-50%) translateX(20%);
  }

  :host([effect="fade-in-slide"][position="left"][opened]) #content {
    transform: translateY(-50%) translateX(0);
  }
`;


export const fall = css`
  :host([effect="fall"]) {
    perspective: 1300px;
  }

  :host([effect="fall"]) #content {
    transform-style: preserve-3d;
    opacity: 0;
  }

  :host([effect="fall"][opened]) #content {
    transition: all var(--kemet-popover-transition-speed, 0.3s) ease-in;
    opacity: 1;
  }

  :host([effect="fall"][position="top"]) #content {
    transform: translateX(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="top"][opened]) #content {
    transform: translateX(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="bottom"]) #content {
    transform: translateX(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="bottom"][opened]) #content {
    transform: translateX(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="right"]) #content {
    transform: translateY(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="right"][opened]) #content {
    transform: translateY(-50%) translateZ(0px) rotateX(0deg);
  }

  :host([effect="fall"][position="left"]) #content {
    transform: translateY(-50%) translateZ(600px) rotateX(20deg);
  }

  :host([effect="fall"][position="left"][opened]) #content {
    transform: translateY(-50%) translateZ(0px) rotateX(0deg);
  }
`;

export const flipHorizontal = css`
  :host([effect="flip-horizontal"]) {
    perspective: 1300px;
  }

  :host([effect="flip-horizontal"]) #content {
    transform-style: preserve-3d;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-horizontal"][opened]) #content {
    opacity: 1;
  }

  :host([effect="flip-horizontal"][position="top"]) #content {
    transform: translateX(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="top"][opened]) #content {
    transform: translateX(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="bottom"]) #content {
    transform: translateX(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="bottom"][opened]) #content {
    transform: translateX(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="right"]) #content {
    transform: translateY(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="right"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }

  :host([effect="flip-horizontal"][position="left"]) #content {
    transform: translateY(-50%) rotateY(-70deg);
  }

  :host([effect="flip-horizontal"][position="left"][opened]) #content {
    transform: translateY(-50%) rotateY(0deg);
  }
`;


export const flipVertical = css`
  :host([effect="flip-vertical"]) {
    perspective: 1300px;
  }

  :host([effect="flip-vertical"]) #content {
    transform-style: preserve-3d;
    transition: all var(--kemet-popover-transition-speed, 0.3s);
    opacity: 0;
  }

  :host([effect="flip-vertical"][opened]) #content {
    opacity: 1;
  }

  :host([effect="flip-vertical"][position="top"]) #content {
    transform: translateX(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="top"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="bottom"]) #content {
    transform: translateX(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="bottom"][opened]) #content {
    transform: translateX(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="right"]) #content {
    transform: translateY(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="right"][opened]) #content {
    transform: translateY(-50%) rotateX(0deg);
  }

  :host([effect="flip-vertical"][position="left"]) #content {
    transform: translateY(-50%) rotateX(-70deg);
  }

  :host([effect="flip-vertical"][position="left"][opened]) #content {
    transform: translateY(-50%) rotateX(0deg);
  }
`;

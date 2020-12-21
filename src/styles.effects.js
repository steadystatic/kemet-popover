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

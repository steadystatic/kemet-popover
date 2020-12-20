import { css } from 'lit-element';

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

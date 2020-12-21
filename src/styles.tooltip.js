import { css } from 'lit-element';

export const customTooltip = css`
  #custom-tooltip {
    display: flex;
    position: absolute;
  }

  :host([position="top"]) #custom-tooltip {
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="right"]) #custom-tooltip {
    right: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  :host([position="bottom"]) #custom-tooltip {
    bottom: 100%;
    left: 50%;
    transform-origin: left;
    transform: translateX(-50%);
  }

  :host([position="left"]) #custom-tooltip {
    left: 100%;
    top: 50%;
    transform-origin: top;
    transform: translateY(-50%);
  }

  ::slotted([slot="custom-tooltip"]) {
    display: flex;
  }
`;

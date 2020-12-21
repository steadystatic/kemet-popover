import { html, css, LitElement } from 'lit-element';
import { tooltip, customTooltip } from './styles.tooltip.js';
import {
  fadeIn,
  fadeInScaleUp,
  fadeInSlide,
  fall,
  flipHorizontal,
  flipVertical,
} from './styles.effects.js';

export class KemetPopover extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
          position: relative;
          z-index: unset;
        }

        #trigger {
          display: inline-block;
          cursor: pointer;
        }

        #content {
          visibility: hidden;
          pointer-events: none;
          width: var(--kemet-popover-width, 100%);
          height: var(--kemet-popover-height, auto);
          position: absolute;
          z-index: -1;
        }

        :host([opened]) #content {
          visibility: visible;
          z-index: 9;
          pointer-events: auto;
        }

        ::slotted([slot="content"]) {
          color: var(--kemet-popover-color, #fafafa);
          display: block;
          width: 100%;
          padding: 1rem;
          box-sizing: border-box;
          background-color: var(--kemet-popover-bgcolor, rgba(36,49,56,1));
        }

        :host([position="top"]) #content {
          bottom: calc(100% + var(--kemet-popover-gap, 0px));
          left: 50%;
          transform: translateX(-50%);
        }

        :host([position="right"]) #content {
          left: calc(100% + var(--kemet-popover-gap, 0px));
          top: 50%;
          transform: translateY(-50%);
        }

        :host([position="bottom"]) #content {
          top: calc(100% + var(--kemet-popover-gap, 0px));
          left: 50%;
          transform: translateX(-50%);
        }

        :host([position="left"]) #content {
          right: calc(100% + var(--kemet-popover-gap, 0px));
          top: 50%;
          transform: translateY(-50%);
        }
      `,
      tooltip,
      customTooltip,
      fadeIn,
      fadeInScaleUp,
      fadeInSlide,
      fall,
      flipHorizontal,
      flipVertical,
    ];
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true
      },
      effect: {
        string: String,
        reflect: true
      },
      position: {
        type: String,
        reflect: true
      },
      tooltip: {
        type: Boolean,
      },
      customTooltip: {
        type: Boolean,
        attribute: 'custom-tooltip'
      },
      fireOnClick: {
        type: Boolean,
        attribute: 'fire-on-click'
      },
      fireOnHover: {
        type: Boolean,
        attribute: 'fire-on-hover'
      }
    }
  }

  constructor() {
    super();

    // managed properties
    this.opened = false;
    this.effect = null;
    this.position = 'top';
    this.tooltip = false;
    this.customTooltip = false;
    this.fireOnClick = false;
    this.fireOnHover = true;

    // standard properties
    this.keyCodes = {
      ENTER: 13
    }
  }

  render() {
    return html`
      <div
        id="trigger"
        part="trigger"
        tabIndex="0"
        @click=${this.fireOnClick ? () => this.toggle() : null}
        @keyup=${this.fireOnClick ? (event) => this.handleKeyUp(event) : null}
        @mouseover=${this.fireOnHover ? () => this.open() : null}
        @focus=${this.fireOnHover ? () => this.open() : null}
        @mouseout=${this.fireOnHover ? () => this.close() : null}
        @blur=${this.fireOnHover ? () => this.close() : null}>
        <slot name="trigger"></slot>
        <div id="content" part="content">
          <slot name="content"></slot>
          ${this.makeTooltip()}
        </div>
      </div>
    `;
  }

  open() {
    this.opened = true;

    this.dispatchEvent(new CustomEvent('kemet-popover-opened', {
      bubbles: true,
      composed: false,
      detail: this
    }))
  }

  close() {
    this.opened = false;

    this.dispatchEvent(new CustomEvent('kemet-popover-closed', {
      bubbles: true,
      composed: false,
      detail: this
    }))
  }

  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  handleKeyUp(event) {
    event.preventDefault();

    if (event.keyCode === this.keyCodes.ENTER) {
      this.toggle();
    }
  }

  makeTooltip() {
    if (this.customTooltip) {
      return html`
        <div id="custom-tooltip" part="custom-tooltip">
          <slot name="custom-tooltip"></slot>
        </div>
      `;
    }

    if (this.tooltip) {
      return html`
        <div id="tooltip" part="tooltip">
          <svg width="29px" height="14px" enable-background="new 0 0 29 14" viewBox="0 0 29 14">
            <polygon points="0.15,0 14.5,14.35 28.85,0 "/>
          </svg>
        </div>
      `;
    }

    return null;
  }
}

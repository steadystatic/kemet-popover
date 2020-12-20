import { html, css, LitElement } from 'lit-element';
import { fadeInScaleUp } from './stylesEffect.js';

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
          display: block;
          width: 100%;
          padding: 1rem;
          box-sizing: border-box;
          background: #fafafa;
          border: 1px solid rgba(36,49,56,1);
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
      fadeInScaleUp
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
      fireOnClick: {
        type: Boolean,
        attribute: 'fire-on-click'
      }
    }
  }

  constructor() {
    super();

    this.opened = false;
    this.position = 'top';
  }

  render() {
    return html`
      <div
        id="trigger"
        part="trigger"
        @click=${this.fireOnClick ? (event) => this.toggle(event) : null}
        @keyup=${() => console.log('keyup')}>
        <slot name="trigger"></slot>
      </div>
      <div id="content" part="content">
        <slot name="content"></slot>
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
}

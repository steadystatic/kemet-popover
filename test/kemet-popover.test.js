import { html, fixture, expect } from '@open-wc/testing';

import '../kemet-popover.js';

describe('KemetPopover', () => {
  it('has the correct defaults', async () => {
    const element = await fixture(html`
      <kemet-popover></kemet-popover>
    `);

    expect(element.opened).to.equal(false);
    expect(element.effect).to.equal(null);
    expect(element.position).to.equal('top');
    expect(element.tooltip).to.equal(false);
    expect(element.customTooltip).to.equal(false);
    expect(element.fireOnClick).to.equal(false);
    expect(element.fireOnHover).to.equal(true);
  });

  it('displays a tooltip when specified', async () => {
    const element = await fixture(html`
      <kemet-popover tooltip></kemet-popover>
    `);

    expect(element.shadowRoot.getElementById('tooltip').getAttribute('id')).to.equal('tooltip');
  });

  it('displays a custom tooltip when specified', async () => {
    const element = await fixture(html`
      <kemet-popover custom-tooltip></kemet-popover>
    `);

    expect(element.shadowRoot.getElementById('custom-tooltip').getAttribute('id')).to.equal('custom-tooltip');
  });

  it('opens the tooltip correctly on click', async () => {
    const element = await fixture(html`
      <kemet-popover fire-on-click></kemet-popover>
    `);

    element.shadowRoot.getElementById('trigger').click();

    expect(element.opened).to.equal(true);
  });

  it('passes the a11y audit', async () => {
    const element = await fixture(html`
      <kemet-popover></kemet-popover>
    `);

    await expect(element).shadowDom.to.be.accessible();
  });
});

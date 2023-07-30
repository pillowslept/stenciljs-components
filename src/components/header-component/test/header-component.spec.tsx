import { newSpecPage } from '@stencil/core/testing';
import { HeaderComponent } from '../header-component';

describe('header-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<header-component></header-component>`,
    });
    expect(page.root).toEqualHtml(`
      <header-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </header-component>
    `);
  });
});

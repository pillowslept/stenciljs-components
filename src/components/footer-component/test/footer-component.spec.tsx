import { newSpecPage } from '@stencil/core/testing';
import { FooterComponent } from '../footer-component';

describe('footer-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FooterComponent],
      html: `<footer-component></footer-component>`,
    });
    expect(page.root).toEqualHtml(`
      <footer-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </footer-component>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { PictureComponent } from '../picture-component';

describe('picture-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PictureComponent],
      html: `<picture-component></picture-component>`,
    });
    expect(page.root).toEqualHtml(`
      <picture-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </picture-component>
    `);
  });
});

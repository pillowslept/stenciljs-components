import { newE2EPage } from '@stencil/core/testing';

describe('picture-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<picture-component></picture-component>');

    const element = await page.find('picture-component');
    expect(element).toHaveClass('hydrated');
  });
});

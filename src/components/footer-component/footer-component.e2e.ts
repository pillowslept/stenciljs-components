import { newE2EPage } from '@stencil/core/testing';

describe('footer-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<footer-component></footer-component>');

    const element = await page.find('footer-component');
    expect(element).toHaveClass('hydrated');
  });
});

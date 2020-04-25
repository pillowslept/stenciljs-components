import { newE2EPage } from '@stencil/core/testing';

describe('header-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<header-component></header-component>');

    const element = await page.find('header-component');
    expect(element).toHaveClass('hydrated');
  });
});

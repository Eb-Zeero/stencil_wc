import { newE2EPage } from '@stencil/core/testing';

describe('{{cookiecutter.component_tag}}', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<{{cookiecutter.component_tag}}></{{cookiecutter.component_tag}}>');
    const element = await page.find('{{cookiecutter.component_tag}}');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<{{cookiecutter.component_tag}}></{{cookiecutter.component_tag}}>');
    const component = await page.find('{{cookiecutter.component_tag}}');
    const element = await page.find('{{cookiecutter.component_tag}} >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm Private`);

    component.setProperty('name', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

  });
});

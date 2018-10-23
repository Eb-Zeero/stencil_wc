import { MyComponent } from './{{cookiecutter.component_tag}}';

describe('{{cookiecutter.component_tag}}', () => {
  it('builds', () => {
    expect(new MyComponent()).toBeTruthy();
  });

  describe('formatting', () => {
    it('returns empty string for no names defined', () => {
      const component = new MyComponent();
      expect(component.format()).toEqual('');
    });

    it('formats just first names', () => {
      const component = new MyComponent();
      component.name = 'Joseph';
      expect(component.format()).toEqual('Joseph');
    });

  });
});

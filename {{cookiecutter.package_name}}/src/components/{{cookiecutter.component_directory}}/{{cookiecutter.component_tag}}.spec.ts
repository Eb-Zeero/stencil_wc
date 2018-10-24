import { {{cookiecutter.component_class}} } from './{{cookiecutter.component_tag}}';

describe('{{cookiecutter.component_tag}}', () => {
  it('builds', () => {
    expect(new {{cookiecutter.component_class}}()).toBeTruthy();
  });

  describe('formatting', () => {
    it('returns empty string for no names defined', () => {
      const component = new {{cookiecutter.component_class}}();
      expect(component.formatPrivate()).toEqual('');
    });

    it('formats just first names', () => {
      const component = new {{cookiecutter.component_class}}();
      component.name = 'Joseph';
      expect(component.formatPrivate()).toEqual('Joseph');
    });

  });
});

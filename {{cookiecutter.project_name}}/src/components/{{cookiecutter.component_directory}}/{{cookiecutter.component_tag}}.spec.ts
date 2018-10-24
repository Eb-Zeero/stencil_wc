import { {{cookiecutter.component_class}} } from './{{cookiecutter.component_tag}}';

describe('{{cookiecutter.component_tag}}', () => {
  it('builds', () => {
    expect(new {{cookiecutter.component_class}}()).toBeTruthy();
  });

  describe('formatting', () => {
    it('returns Private string for no names defined with private method', () => {
      const component = new {{cookiecutter.component_class}}();
      expect(component.formatPrivate()).toEqual('Private');
    });

    it('formats name with private method', () => {
      const component = new {{cookiecutter.component_class}}();
      component.name = 'Joseph';
      expect(component.formatPrivate()).toEqual('Joseph');
    });

    it('returns Public string for no names defined with public method', () => {
        const component = new {{cookiecutter.component_class}}();
        expect(component.formatPublic()).toEqual('Public');
    });

    it('formats nameswith private method', () => {
        const component = new {{cookiecutter.component_class}}();
        component.name = 'Thomas';
        expect(component.formatPrivate()).toEqual('Thomas');
    });

  });
});

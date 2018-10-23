import { Component, Prop } from '@stencil/core';

@Component({
  tag: '{{cookiecutter.component_tag}}',
  styleUrl: '{{cookiecutter.component_tag}}.css',
  shadow: true
})
export class {{cookiecutter.component_class}} {
  @Prop() name: string;

  format(): string {
    return (
      (this.name || '')
    );
  }

  render() {
    return <div>Hello, World! I'm {this.format()}</div>;
  }
}

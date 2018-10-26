import { Component, Method, Prop } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: '{{cookiecutter.component_tag}}.css',
  tag: '{{cookiecutter.component_tag}}'
})
export class {{cookiecutter.component_class}} {
  @Prop() name: string;

  /**
   * Public methods API
   * These methods are exposed on the host element.
   */
  @Method() public formatPublic(): string {
        return (
            (this.name || 'Public')
        );
    }
  /**
   * Private methods API
   * These methods are only available to this Element.
   */
  private formatPrivate(): string {
    return (
      (this.name || 'Private')
    );
  }

  /**
   * Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentWillLoad() {}
  componentDidLoad() {}
  componentWillEnter() {}
  componentDidEnter() {}
  componentWillLeave() {}
  componentDidLeave() {}
  componentDidUnload() {}

  render() {
    return <div>Hello, World! I'm {this.formatPrivate()}</div>;
  }
}

import { Component, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
})
export class HeaderComponent {

  @Prop() mainTitle: string;

  @Method()
  async open() {

  }

  render() {
    return (
      <div class="header">
        <div class="title">{this.mainTitle}</div>
        <div class="icon">
          <button>&hearts;</button>
        </div>
      </div>
    );
  }

}

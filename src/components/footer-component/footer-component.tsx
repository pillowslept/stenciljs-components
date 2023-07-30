import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css',
  shadow: true,
})
export class FooterComponent {

  @Prop() mainTitle: string;
  @Prop() subtitle: string;
  @Prop() link: string;

  render() {
    return (
      <div class="footer">
        <div class="title">{this.mainTitle}</div>
        <div class="subtitle">{this.subtitle}</div>
        {this.link
          ? <div><a target="_blank" href={this.link}>Page</a></div>
          : <div>No link provided</div>
        }
      </div>
    );
  }

}

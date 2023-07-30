import { Component, h, Prop } from '@stencil/core';

const SQUARE = 'square';
const CIRCLE = 'circle';

@Component({
  tag: 'picture-component',
  styleUrl: 'picture-component.css',
  shadow: true,
})
export class PictureComponent {

  @Prop() url: string;
  @Prop() type = SQUARE;

  isSquare() {
    return this.type === SQUARE;
  }

  render() {
    return (
      <div class={ 'image ' + (this.isSquare() ? SQUARE : CIRCLE) }>
        {this.url
          ? <img class={ (this.isSquare() ? SQUARE : CIRCLE) } src={ this.url } />
          : <div>No image provided</div>
        }
      </div>
    );
  }

}

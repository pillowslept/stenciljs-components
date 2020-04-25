import { Component, ComponentInterface, h, Prop, State } from '@stencil/core';

const REACTIONS = ['Love', 'Kiss', 'Hug', 'Touch'];

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent implements ComponentInterface {

  @Prop() name: string;
  @Prop() years: number = 0;
  @Prop() content: string;

  @State() reactions = [];

  addReactionHandler() {
    const reaction = REACTIONS[Math.floor(Math.random() * 3) + 1];
    this.reactions = [...this.reactions, reaction];
  }

  clearReactionshandler() {
    this.reactions = [];
  }

  removeReactionhandler(index: number) {
    this.reactions.splice(index, 1);
    this.reactions = [...this.reactions];
  }

  render() {
    const reactions = this.reactions.map((reaction, index) => (
      <span class="badge" onClick={this.removeReactionhandler.bind(this, index)}>
        {reaction}
      </span>
    ));
    let clearButton = null;
    if (reactions.length) {
      clearButton = (<button onClick={this.clearReactionshandler.bind(this)}>Clear &hearts;</button>)
    }

    return (
      <div class="card">
        <div class="title">
          { this.name }
          <span class="counter">
            Years: { this.years }
          </span>
        </div>
        <div class="content">
          { this.content }
        </div>
        <div class="actions">
          {clearButton}
          <button onClick={this.addReactionHandler.bind(this)}>Add &hearts;</button>
        </div>
        <div class="badges">
          {reactions}
        </div>
      </div>
    );
  }
}

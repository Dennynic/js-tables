import { Component } from '@core/Component';

export class Formula extends Component {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  toHTML() {
    return `<div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>`;
  }

  onInput(event) {
    console.log('Root', this.$root);
    console.log('Formula', event.target.textContent.trim());
  }
}

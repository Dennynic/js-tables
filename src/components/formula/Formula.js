import {Component} from "@core/Component";

export class Formula extends Component{
  static className = 'excel__formula';

  toHTML() {
    return `<div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>`;
  }
}
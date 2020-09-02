import {Component} from "@core/Component";

export class Table extends Component{
  static className = 'excel__table';
  toHTML() {
    return `<div class="row">
                <div class="info">

                </div>
                <div class="data">
                    <div class="column">A</div>
                    <div class="column">B</div>
                    <div class="column">C</div>
                </div>
            </div>
            <div class="row">
                <div class="info">
                    1
                </div>
                <div class="data">
                    <div class="cell selected" contenteditable></div>
                    <div class="cell" contenteditable></div>
                    <div class="cell" contenteditable></div>
                </div>
            </div>`;
  }
}
import {Component} from "@core/Component";

export class Header extends Component{
  static className = 'excel__header';

  toHTML() {
    return `<input type="text" class="input" value="" placeholder="New table"/>
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>

            </div>`;
  }
}
import { Component } from '@core/Component';
import { $ } from '@core/dom';
import { createTable } from '@/components/table/table.template';
import { resizeHandler } from '@/components/table/table.resize';
import { TableSelection } from '@/components/table/TableSelection';
import { isCell, nextSelector, matrix } from './table.functions';

export class Table extends Component {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mouseup', 'keydown'],
    });
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  onClick() {
    //console.log('click');
  }

  onMousedown(event) {
    const { resize } = event.target.dataset;
    !!resize && resizeHandler(this.$root, event);

    if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const idsArr = matrix($target, this.selection.current).map(id =>
          this.$root.find(`[data-id="${id}"]`),
        );
        this.selection.selectGroup(idsArr);
      } else {
        this.selection.select($target);
      }
    }
  }

  onMousemove() {
    //console.log('move');
  }

  onMouseup() {
    //console.log('up');
  }

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp',
    ];
    const { key } = event;
    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();
      const id = this.selection.current.id(true);
      const $next = this.$root.find(nextSelector(key, id));
      this.selection.select($next);
    }
  }

  toHTML() {
    return createTable();
  }
}

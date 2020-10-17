import { Component } from '@core/Component';
import { $ } from '@core/dom';
import { createTable } from '@/components/table/table.template';
import { resizeHandler } from '@/components/table/table.resize';
import { TableSelection } from '@/components/table/TableSelection';
import { isCell } from './table.functions';
import { matrix } from './table.functions';

export class Table extends Component {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mouseup'],
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

  toHTML() {
    return createTable();
  }
}

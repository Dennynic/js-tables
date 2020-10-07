import { Component } from '@core/Component';
import { createTable } from '@/components/table/table.template';
import { resizeHandler } from '@/components/table/table.resize';

export class Table extends Component {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mouseup'],
    });
  }

  onClick() {
    //console.log('click');
  }

  onMousedown(event) {
    const { resize } = event.target.dataset;
    !!resize && resizeHandler(this.$root, event);
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

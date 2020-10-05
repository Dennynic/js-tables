import { Component } from '@core/Component';
import { createTable } from '@/components/table/table.template';

export class Table extends Component {
  static className = 'excel__table';

  constructor($root){
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
  }

  onClick(){
    console.log('click');
  }

  onMousedown(){
    console.log('down');
  }

  onMousemove(){
    console.log('move');
  }

  onMouseup(){
    console.log('up');
  }

  toHTML() {
    return createTable();
  }
}

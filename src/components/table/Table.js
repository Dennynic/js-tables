import { Component } from '@core/Component';
import { createTable } from '@/components/table/table.template';

export class Table extends Component {
  static className = 'excel__table';
  toHTML() {
    return createTable();
  }
}

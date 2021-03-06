const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;

const ROWS = 30;

function getWidth(state, index) {
  return (state[index] || DEFAULT_WIDTH) + 'px';
}

function toCell(state, row) {
  return function (_, col) {
    const width = getWidth(state.colState, col);
    return `
        <div 
            class="cell" 
            data-col="${col}" 
            data-id="${row}:${col}"
            data-type="cell" 
            contenteditable
            style="width: ${width}"
            >
        </div>`;
  };
}

function toCol({ col, index, width }) {
  return `<div class="column" data-type="resizable" data-col="${index}" style = "width: ${width}">
    ${col}
    <div class="col-resize" data-resize="col"></div>
    </div>`;
}

function createRow(index, content) {
  const resizer = index
    ? '<div class="row-resize" data-resize="row" ></div>'
    : '';
  return `<div class="row" data-type="resizable">
    <div class="info">${index ? index : ''}
        ${resizer}
    </div>
    <div class="data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

function widthWidthFrom(state) {
  return function (col, index) {
    return {
      col,
      index,
      width: getWidth(state.colState, index),
    };
  };
}

export function createTable(rowsCount = ROWS, state = {}) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const colsHtmlString = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(widthWidthFrom(state))
    .map(toCol)
    .join('');

  rows.push(createRow(null, colsHtmlString));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell(state, row))
      .join('');

    rows.push(createRow(row + 1, cells));
  }
  return rows.join('');
}

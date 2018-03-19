sizePicker.addEventListener('submit', makeGrid);

let canvas = document.querySelector('#pixelCanvas');

function makeGrid(event) {
  event.preventDefault();
  let width = sizePicker.width.value;
  let height = sizePicker.height.value;
  let columns = '';
  let rows = '';

  for (let i = 0; i < width; i++) {
    columns += '<td></td>';
  }

  for (let i = 0; i < height; i++) {
    rows += '<tr>' + columns + '</tr>';
  }

  pixelCanvas.innerHTML = rows;

}

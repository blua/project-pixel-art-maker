sizePicker.addEventListener('submit', makeGrid);
pixelCanvas.addEventListener('click',changeColor);
pixelCanvas.addEventListener('dblclick',removeColor);

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

  clearButtonDiv.innerHTML = '<br><button type="button" id="clearButton">Clear canvas</button>';

  clearButton.addEventListener('click', clearCanvas);

  function clearCanvas() {
    let tds = pixelCanvas.querySelectorAll('td');

    for (let i = 0; i < tds.length; i++) {
      tds[i].style.backgroundColor = '#fff';
    }
  }
}

function changeColor(event) {
  let color = colorPicker.value;

  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = color;
  }
}

function removeColor(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = '#fff';
  }
}

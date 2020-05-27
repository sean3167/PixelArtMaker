// Define the canvas table
const canvas = document.getElementById('pixelCanvas');

// Select size input by clicking "submit" button
const button = document.querySelector('[type = "submit"]');

button.addEventListener('click', function(event) {
  event.preventDefault();
  makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;

  // Reset the canvas every time the "submit" button is clicked
  canvas.innerHTML = '';

  for(var i = 0; i < height; i++) {
    let rows = document.createElement('tr');
    canvas.appendChild(rows);
    for(var j = 0; j < width; j++) {
      let columns = document.createElement('td');
      rows.appendChild(columns);
    }
  }
}

// Select color input by clicking once
canvas.addEventListener('click', function(event) {
  var color = document.getElementById('colorPicker').value;
  // Undo the color in the cell if you make a mistake
  let clickedCell = event.target
  if ((clickedCell.style.backgroundColor === 'white') ||
      (clickedCell.style.backgroundColor === '')) {
    clickedCell.style.backgroundColor = color;
  } else {
    clickedCell.style.backgroundColor = 'white';
  }
});

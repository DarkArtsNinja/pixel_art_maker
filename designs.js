function makeGrid(event) {
  event.preventDefault();
  const height = event.target[0].value;
  const width = event.target[1].value;

  console.log('this is the num of rows', height);
  console.log('this is the num of columns', width);

  const grabTable = document.getElementById('pixelCanvas');

  if (grabTable.innerHTML !== '') {
    grabTable.innerHTML = '';
  }

  for (let i = 0; i < height; i++) {
    const row = grabTable.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
    }
  }

  const pixels = document.getElementsByTagName('td');

  console.log('this is the pixels object', pixels);
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = document.getElementById('colorPicker').value;
    });
  }
}
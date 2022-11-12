function makeGrid(event) {
  event.preventDefault();
  const height = event.target[0].value;
  const width = event.target[1].value;

  //  this part of the code let's me know if the height and width were properly read
  console.log('this is the num of rows', height);
  console.log('this is the num of columns', width);

  // this will select the table inthe html file
  const grabTable = document.getElementById('pixelCanvas');

  //  if this already has elements, it will clear it out so that it won't accumulate
  if (grabTable.innerHTML !== '') {
    grabTable.innerHTML = '';
  }

  //  the loop creates the grid, the outside loops makes the row while the inner one makes the columns
  for (let i = 0; i < height; i++) {
    const row = grabTable.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
    }
  }

  //  it selects all the rows and puts them in a Nodelist object
  const pixels = document.getElementsByTagName('td');

  // console.log('this is the pixels object', pixels); //this line shows me the whole NodeList of objects

  //  this piece of code will add an event listener to every pixel
  // for (let i = 0; i < pixels.length; i++) {
  //   pixels[i].addEventListener('click', () => {
  //     pixels[i].style.backgroundColor = document.getElementById('colorPicker').value;
  //   });
  // }

  //  this piece of code is just another way to code the samething as above, I just thought it was
  //  cooler because it used a for..of loop, rather than the typical for-loop
  for (const pixel of pixels) {
    console.log("this prints out the individual pixel object", pixel);
    console.log(pixel);
    pixel.addEventListener('click', function onClick() {
        pixel.style.background = document.getElementById('colorPicker').value;
    })
  }
}
const newColorBtn = document.getElementById('newColor-btn');
const background = document.querySelector('body');
const hexCodeEl = document.getElementById('hex-code-el');

const getRandomColor = () => {
    return (`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`);  // getting a random hex code
}

function isColorLight(hex) {    // for finding if the random color is light or dark
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 255;
  const g = (rgb >> 8) & 255;
  const b = rgb & 255;

  return (r + g + b) / 3 > 128;
}

const setNewColor = () => {
    let randomColor = getRandomColor();
    background.style.backgroundColor = randomColor;
    hexCodeEl.textContent = `Hex Code: ${getRandomColor()}`;
    hexCodeEl.style.color = isColorLight(randomColor) ? "#000" : "#fff";    // changin the color of the text based on the background's brightness
}

newColorBtn.addEventListener('click', () => {
    setNewColor();
});

/* Challenge:

Title: Color flipper button
=> Build a simple webpage with a button that changes the background color of the page to a random color every time you click it. 
Also display the current hex color code on screen so the user can see it update.

Requirements: 
=> A button labeled "New color"
Clicking it changes the page background to a random hex color
The hex value (e.g.#a3f291) is shown somewhere on the page
The text color should always be readable — try switching it to black or white depending on the background
*/
const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor(){
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
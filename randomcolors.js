
//colorful header from Colt Steele Video

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`
}

const h1 = document.querySelector('h1');



const letters = document.querySelectorAll('.letter');


setInterval(function() {
  for (let letter of letters) {
    letter.style.color = randomRGB();
  }
}, 500);

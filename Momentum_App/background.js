const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const background = document.createElement("img");

background.src = `images/${chosenImage}`;

// const main = document.querySelector('.container');

// main.innerHTML += 'background';

// main.prepend(background);

document.body.prepend(background);

// document.body.style.backgroundImage('background');
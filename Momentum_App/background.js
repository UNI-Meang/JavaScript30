const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const background = document.createElement("img");

background.src = `images/${chosenImage}`;

document.body.appendChild(background);
const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#33B6FF';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '100';
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function randomColor() {
    return Math.floor(Math.random() * 361);
}

let hue = randomColor();


const draw = ({ offsetX, offsetY}) => {
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();

    [lastX, lastY] = [offsetX, offsetY];
    hue >= 360 ? hue = 0 : hue++;

    (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) && (direction = !direction);
    direction ? ctx.lineWidth++ : ctx.lineWidth--;

};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


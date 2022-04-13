function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BABA55';
    p.style.fontSize = '55px';
}

// Regular
console.log('hi!');

// Interpolated : %s
console.log('Hi! I am %s Maeng!','😃');

// Styled : %C
console.log('%c I am a styled text', 'font-size: 30px; border: 5px solid blue; padding: 5px;')

// warning 
console.warn('OH! NO!');

// Error 
console.error('ERROR!');

// Info
console.info('😎 This is an info!');

// Testing
console.log(1 === 1, 'That is True?');
console.log(1 === 2, 'That is wrong');

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

const friend = [
    {name: 'Min', age: 14},
    {name: 'Park', age: 35},
    {name: 'Ahn', age: 28},
];
console.table(friend);

// Grouping together
friend.forEach(({ name , age})=> {
    console.groupCollapsed(`${name}`);
    console.log(`This is ${name}`);
    console.log(`${name} is ${age} years old`);
    console.log(`${name} is ${parseInt(age / 7) } years old in dog years`);
    console.groupEnd(`${name}`);
}); 
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

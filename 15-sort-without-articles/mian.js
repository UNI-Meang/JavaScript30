const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];

const bands_ul = document.getElementById('bands');

const strip = (bandName) => {
    return bandName.replace(/^(a |the |an )/i, '').trim();
};


const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
console.log(sortedBands);

bands_ul.innerHTML = sortedBands.map((band) => `<li> ${band}</li>`).join('');
// document.getElementById('bands').innerHTML = 
// sortedBands.map(band => `<li>${band}</li>`).join('');
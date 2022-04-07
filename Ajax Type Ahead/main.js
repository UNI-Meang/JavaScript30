const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('.search'); 
const suggestions = document.querySelector('.suggestions');


const cities = [];
fetch(url)
    .then(res => res.json())
    .then(data => cities.push(...data));

// filter로 math 결과가 city or state 일 경우
function findMatchCities(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

// filter 결과값 display 해주기
function displayMatches() {
    const matchArray = findMatchCities(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
        <li>
            <span class="name">&{cityName}, ${stateName}</span>
            <span class="population">${numberwithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
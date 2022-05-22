
//API key 숨기기
const weather = document.querySelector("#weather span:first-child");
console.log(weather);
const city = document.querySelector("#weather span:last-child");
console.log(city);
const API_KEY = config.apikey;
console.log(config);
console.log(API_KEY);
// location 불러오기 success
function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
console.log(url);
//data를 못받아옴
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      console.log(data.weather);
      console.log(data.weather.main);

      if(data.weather[0].main =='Clear'){
          weather.innerText = '☀️' + `${data.weather[0].main} / ${data.main.temp}`;
        } else {
          weather.innerText = '🌥' + `${data.weather[0].main} / ${data.main.temp}`;
        }
    });
}
//location 불러오기 fail
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
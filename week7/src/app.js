function tempDisplay(response) {
  let city = document.querySelector("#city");
  let temeperaturElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  city.innerHTML = response.data.city;
  temeperaturElement.innerHTML = Math.round(response.data.temperature.current);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
}

let query = "Polokwane";
let key = "b4b16ao0bed60a37cdt0a5dcdf865c3b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Polokwane&key=b4b16ao0bed60a37cdt0a5dcdf865c3b&units=metric";
axios.get(apiUrl).then(tempDisplay);

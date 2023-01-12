function tempDisplay(response) {
  let city = document.querySelector("#city");
  let temeperaturElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let weekDay = day[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  celsiusTemperature = response.data.temperature.current;
  let iconElement = document.querySelector("#icon");
  city.innerHTML = response.data.city;
  temeperaturElement.innerHTML = Math.round(response.data.temperature.current);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  document.querySelector(".day").innerHTML = weekDay;
  document.querySelector(".time").innerHTML = hour + ":" + minutes;
  iconElement.setAttribute("src", response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.description);
}
function search(city) {
  let apiKey = "b4b16ao0bed60a37cdt0a5dcdf865c3b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(tempDisplay);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function otherTemp(event) {
  event.preventDefault();
  let fahTemperature = (celsiusTemperature * 9) / 5 + 32;
  let temeperaturElement = document.querySelector("#temperature");
  temeperaturElement.innerHTML = Math.round(fahTemperature);
}

function celsius(event) {
  let cels = document.querySelector("#temperature");
  cels.innerHTML = Math.round(celsiusTemperature);
}

let fah = document.querySelector("#fah");
fah.addEventListener("click", otherTemp);
let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", celsius);
search("Polokwane");

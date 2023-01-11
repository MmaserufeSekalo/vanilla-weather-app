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
  let area = "Polokwane";
  let apiKey = "b4b16ao0bed60a37cdt0a5dcdf865c3b";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=Polokwane&key=b4b16ao0bed60a37cdt0a5dcdf865c3b&units=metric";
  axios.get(apiUrl).then(tempDisplay);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}
search()
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;

let 







let query= "Polokwane";
let key = "b4b16ao0bed60a37cdt0a5dcdf865c3b";
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}'
axios.get
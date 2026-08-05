//API functionality
function displayTemperature(response) {
  let cityTempVariable = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  cityTempVariable.innerHTML = temperature;
}

//User city search functionality
function search(event) {
  event.preventDefault();
  //alert("Searching");
  let cityInputVariable = document.querySelector("#searchACity");

  let h1UserCityVariable = document.querySelector("#displayCity");
  if (cityInputVariable.value.trim() !== "") {
    h1UserCityVariable.innerHTML = cityInputVariable.value;
  } else {
    alert("Please enter a city");
  }
}

let formVariable = document.querySelector("#searchForm");
formVariable.addEventListener("submit", search);

let city = cityInputVariable.value;
let apiKey = "4eda3e1bbo05f384dt87aa5370dd4f39";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);

//Display temperature as per API
function updateTemp(response){
    let temperatureVariable = document.querySelector("#current-temperature");
    let temperatureRounded = Math.round(response.data.temperature.current);
    let h1UserCityVariable = document.querySelector("#displayCity");
    let descriptionVariable = document.querySelector("#description");
    let humidityVariable = document.querySelector("#humidity");

    console.log(response.data);

    h1UserCityVariable.innerHTML = response.data.city;
    temperatureVariable.innerHTML = `${temperatureRounded}°C`;
    descriptionVariable.innerHTML = response.data.condition.description;
    humidityVariable.innerHTML = `${response.data.temperature.humidity}%`;
}

//Searched city is mapped to API
function searchCity(city){
    let apiKey = "4eda3e1bbo05f384dt87aa5370dd4f39";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    //console.log(apiURL);
    axios.get(apiURL).then(updateTemp);
}

//User searches for a city
function search(event) {
  event.preventDefault();
  let cityInputVariable = document.querySelector("#searchACity");

  let h1UserCityVariable = document.querySelector("#displayCity");
  if (cityInputVariable.value.trim() !== "") {
    h1UserCityVariable.innerHTML = cityInputVariable.value;
  } else {
    alert("Please enter a city");
  }
  searchCity(cityInputVariable.value);
}

let formVariable = document.querySelector("#searchForm");
formVariable.addEventListener("submit", search);

searchCity("Melbourne");





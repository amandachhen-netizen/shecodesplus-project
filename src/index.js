//Display temperature as per API
function updateTemp(response){
    let temperatureVariable = document.querySelector("#current-temperature");
    let temperatureRounded = Math.round(response.data.temperature.current);
    let h1UserCityVariable = document.querySelector("#displayCity");
    let descriptionVariable = document.querySelector("#description");
    let humidityVariable = document.querySelector("#humidity");
    let windSpeedVariable = document.querySelector("#windSpeed");
    let windSpeedRounded = Math.round(response.data.wind.speed);
    let timeVariable = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconVariable = document.querySelector("#icon");
    
    console.log(response.data);

    h1UserCityVariable.innerHTML = response.data.city;
    temperatureVariable.innerHTML = `${temperatureRounded}°C`;
    descriptionVariable.innerHTML = response.data.condition.description;
    humidityVariable.innerHTML = `${response.data.temperature.humidity} %`;
    windSpeedVariable.innerHTML = `${windSpeedRounded} km/hour`;
    timeVariable.innerHTML = formatDate(date);
    iconVariable.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-emoji" />`;
}
//Function to format date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  if (minutes < 10){
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
  
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





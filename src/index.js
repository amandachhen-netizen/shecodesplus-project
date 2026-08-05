function runUserSearch(event) {
    event.preventDefault();
    let userCitySearch = document.querySelector("searchACity");

    let userCityDisplay = document.querySelector("h1");
    userCityDisplay.innerHTML = `${searchACity.value}`;
}

let userInput = document.querySelector("#searchForm");
userInput.addEventListener("submit", runUserSearch);
function search(event){
    event.preventDefault();
    //alert("Searching");
    let cityInputVariable = document.querySelector("#searchACity");

    let h1UserCityVariable = document.querySelector("#displayCity");
    if(cityInputVariable.value.trim() !== ""){
        h1UserCityVariable.innerHTML = cityInputVariable.value;
    } else {
        alert("Please enter a city");
    }
}


let formVariable = document.querySelector("#searchForm");
formVariable.addEventListener("submit", search);
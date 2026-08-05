function search(event){
    event.preventDefault();
    //alert("Searching");
    let cityInputVariable = document.querySelector("#searchACity");

    let h1UserCityVariable = document.querySelector("#displayCity");
    h1UserCityVariable.innerHTML = `${cityInputVariable.value}`;
}


let formVariable = document.querySelector("#searchForm");
formVariable.addEventListener("submit", search);
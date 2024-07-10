const apiKey = "b59739f4e2e37e272ac9d94675b5f4cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(searchBox){
    const response = await fetch(apiUrl + searchBox `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", ()=>{
    console.log("btn is clicked");
    checkWeather(searchBox.value);
});


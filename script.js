const apiKey = "f6b21126a67340c6b152f2d1cb2b075a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloudy.webp";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.webp";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rainy.webp";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.webp";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/misty.webp";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})    
const searchBox = document.querySelector(".search input");
const weather_icon = document.querySelector(".weather_icon");
const searchBtn = document.querySelector(".search Button");
const apiKey = "de574eac0db24d589fcf2b6407aeb38b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
      weather_icon.src = "/weather website/weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weather_icon.src = "/weather website/weather-app-img/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weather_icon.src = "/weather website/weather-app-img/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather_icon.src = "/weather website/weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weather_icon.src = "/weather website/weather-app-img/images/mist.png";
    } else if (data.weather[0].main == "Wind") {
      weather_icon.src = "/weather website/weather-app-img/images/wind.png";
    } else if (data.weather[0].main == "Snow") {
      weather_icon.src = "/weather website/weather-app-img/images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

import toggleUnit from './toggle_unit';

const displayWeather = async (weatherData) => {
  weatherData.then(data => {
    document.querySelector('.weather-box').innerHTML = `
    <h1>${data.name}, <span class="country">${data.sys.country}</span></h1>
    <div class="weather-header">
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
    <h2>${data.weather[0].description[0].toUpperCase()}${data.weather[0].description.slice(1)}</h2>
    <p class="temp">${data.main.temp}°</p>
    <p class="toggle"><a href="#" id="toggle">Change to Fahrenheit</a></p>
      <div class="weather-info">
        <p class="info-item">Wind <br/> ${data.wind.speed} m/s</p>
        <p class="info-item">Feels like <br/> <span id="feels-like">${data.main.feels_like}°</span></p>
        <p class="info-item">Humidity <br/> ${data.main.humidity}%</p>
        <p class="info-item">Pressure <br/> ${data.main.pressure} hPa</p>
      </div>
    </div>
    `;
    toggleUnit();
  });
};

export { displayWeather as default };
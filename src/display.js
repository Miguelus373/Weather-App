import toggleUnit from './toggle_unit';

const displayWeather = async (weatherData) => {
  const data = await weatherData;
  const {
    name: city, sys: { country },
    weather: [{ description, icon }],
    main: {
      temp: temperature, humidity, pressure, feels_like: feelsLike,
    },
    wind: { speed },
  } = data;

  document.querySelector('.weather-box').innerHTML = `
    <h1>${city}, <span class="country">${country}</span></h1>
    <div class="weather-header">
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>
    <h2>${description[0].toUpperCase()}${description.slice(1)}</h2>
    <p class="temp">${temperature}°</p>
    <p class="toggle"><a href="#" id="toggle">Change to Fahrenheit</a></p>
      <div class="weather-info">
        <p class="info-item">Wind <br/> ${speed} m/s</p>
        <p class="info-item">Feels like <br/> <span id="feels-like">${feelsLike}°</span></p>
        <p class="info-item">Humidity <br/> ${humidity}%</p>
        <p class="info-item">Pressure <br/> ${pressure} hPa</p>
      </div>
    </div>
    `;
  toggleUnit();
};

export { displayWeather as default };
import './styles.css';
import weather from './weather';
import location from './location';
import display from './display';

const byCity = document.getElementById('search');
const current = document.getElementById('current');

byCity.addEventListener('click', () => {
  const locationInput = [...document.querySelectorAll('input')].map(i => i.value);
  display(weather(location('city', locationInput)));
});

current.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(position => {
    const coords = [position.coords.latitude, position.coords.longitude];
    display(weather(location('current', ...coords)));
  });
});
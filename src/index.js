import './styles.css';
import weather from './weather';
import location from './location';
import display from './display';

const byCity = document.getElementById('search');

byCity.addEventListener('click', () => {
  const locationInput = [...document.querySelectorAll('input')].map(i => i.value);
  display(weather(location(locationInput)));
});

display(weather(location('valencia')));
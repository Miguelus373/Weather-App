import convert from './unit-converter';

const toggleUnit = () => {
  const toggle = document.getElementById('toggle');

  toggle.addEventListener('click', () => {
    const targetUnit = toggle.innerText.split(' ')[2];
    const temp = document.querySelector('.temp');
    const feelsLike = document.getElementById('feels-like');

    temp.innerText = `${convert(targetUnit, temp.innerText)}°`;
    feelsLike.innerText = `${convert(targetUnit, feelsLike.innerText)}°`;

    toggle.innerText = targetUnit === 'Fahrenheit' ? 'Change to Celsius' : 'Change to Fahrenheit';
  });
};

export { toggleUnit as default };
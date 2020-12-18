const convertUnit = (targetUnit, deg) => {
  let unit;

  if (targetUnit === 'Fahrenheit') {
    unit = (parseFloat(deg) * (9 / 5) + 32).toFixed(2);
  } else if (targetUnit === 'Celsius') {
    unit = ((parseFloat(deg) - 32) * (5 / 9)).toFixed(2);
  }
  return unit;
};

export { convertUnit as default };
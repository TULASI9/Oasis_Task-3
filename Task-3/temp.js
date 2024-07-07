const temperatureInput = document.getElementById('temperature-input');
const conversionTypeRadios = document.querySelectorAll('.conversion-type input[name="conversion-type"]');
const convertButton = document.getElementById('convert-button');
const convertedTemperatureDisplay = document.getElementById('converted-temperature');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const selectedConversionType = document.querySelector('.conversion-type input[name="conversion-type"]:checked').value;
  let convertedTemperature, unit;

  switch (selectedConversionType) {
    case 'celsius':
      convertedTemperature = temperature;
      unit = '°C';
      break;
    case 'fahrenheit':
      convertedTemperature = (temperature * 9/5) + 32;
      unit = '°F';
      break;
    case 'kelvin':
      convertedTemperature = temperature + 273.15;
      unit = 'K';
      break;
  }

  convertedTemperatureDisplay.textContent = `${convertedTemperature.toFixed(2)} ${unit}`;
});
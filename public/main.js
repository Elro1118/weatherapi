const isNumber = str => {
  return !isNaN(parseFloat(str)) && !isNaN(str - 0)
}

const getWeather = () => {
  let url = ''
  let cityValue = document.querySelector('.weather-search-text').value
  if (cityValue.length === 0) {
    document.querySelector('.weather-city-label').textContent =
      'The textbox is empty.'
  } else {
    console.log(isNumber(cityValue))
    if (isNumber(cityValue)) {
      url =
        'https://api.openweathermap.org/data/2.5/weather?appid=59c6f243bf44bdca855e2e8f1c663981&zip=' +
        cityValue +
        ',us' +
        '&units=imperial'

      getWeatherName(url)
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?appid=59c6f243bf44bdca855e2e8f1c663981&q=${cityValue}&units=imperial`
      getWeatherName(url)
    }
  }
}

const getWeatherName = url => {
  let currentWeather = {}

  fetch(url)
    .then(resp => {
      return resp.json()
    })
    .then(weather => {
      currentWeather = weather
      console.log(weather)
      document.querySelector('.weather-city-label').textContent =
        'The Weather in ' +
        currentWeather.name +
        ' is ' +
        currentWeather.weather[0].main
    })
}

const clearText = () => {
  document.querySelector('.weather-search-text').value = ''
  document.querySelector('.weather-city-label').textContent = ''
}

document.querySelector('.search-button').addEventListener('click', getWeather)
document.querySelector('.clear-button').addEventListener('click', clearText)

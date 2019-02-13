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
      console.log(cityValue)
      url =
        'https://api.openweathermap.org/data/2.5/weather?appid=59c6f243bf44bdca855e2e8f1c663981&zip=' +
        cityValue +
        ',us'
      // `https://api.openweathermap.org/data/2.5/weather?appid=59c6f243bf44bdca855e2e8f1c663981&zip=
      // ${cityValue},us&units=imperial`
      getWeatherName(url)
      // getWeatherZip()
    } else {
      url =
        // 'https://api.openweathermap.org/data/2.5/weather?appid=59c6f243bf44bdca855e2e8f1c663981&q=' +
        // cityValue
        `https://api.openweathermap.org/data/2.5/weather?appid=59c6f243bf44bdca855e2e8f1c663981&q=${cityValue}&units=imperial`
      getWeatherName(url)
    }
  }
}

const getWeatherName = url => {
  let currentWeather = {}

  fetch(url)
    // getting the response back
    .then(resp => {
      return resp.json()
    })
    // opening the response, joke is the actual data that we want
    .then(weather => {
      console.log(weather)
      currentWeather = weather
      document.querySelector('.weather-city-label').textContent =
        'The Weather in ' +
        currentWeather.name +
        ' is ' +
        currentWeather.weather[0].main
      console.log(currentWeather.weather[0].main)
    })
}

document.querySelector('.search-button').addEventListener('click', getWeather)

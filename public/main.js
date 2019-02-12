let currentWeather = {}
let city = ''
const isNumber = str => {
  return !isNaN(parseFloat(str)) && !isNaN(str - 0)
}

const getWeather = () => {
  let cityValue = document.querySelector('.weather-search-text').value
  if (cityValue.length === 0) {
    document.querySelector('.weather-city-label').textContent =
      'The textbox is empty.'
  } else {
    console.log(isNumber(cityValue))
    if (isNumber(cityValue)) {
      getWeatherZip()
    } else {
      getWeatherName()
    }
  }
}

const getWeatherName = () => {
  city = document.querySelector('.weather-search-text').value

  console.log(isNumber(city))
  // send the request

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?appid=59c6f243bf44bdca855e2e8f1c663981&q=' +
      city
  )
    // getting the response back
    .then(resp => {
      return resp.json()
    })
    // opening the response, joke is the actual data that we want
    .then(weather => {
      console.log(weather)
      currentWeather = weather
      document.querySelector('.weather-city-label').textContent =
        'The Weather in ' + city + ' ' + weather.weather[0].main
      console.log(weather.weather[0].main)
    })
}

const getWeatherZip = () => {
  city = document.querySelector('.weather-search-text').value

  console.log(isNumber(city))
  // send the request

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?appid=59c6f243bf44bdca855e2e8f1c663981&zip=' +
      city +
      ',us'
  )
    // getting the response back
    .then(resp => {
      return resp.json()
    })
    // opening the response, joke is the actual data that we want
    .then(weather => {
      console.log(weather)
      currentWeather = weather
      document.querySelector('.weather-city-label').textContent =
        'The Weather in ' + weather.name + ' ' + weather.weather[0].main
      console.log(weather.weather[0].main)
    })
}
document.querySelector('.search-button').addEventListener('click', getWeather)

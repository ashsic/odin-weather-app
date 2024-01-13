// index.js

const getWeather = async function (query = 'Toronto') {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=b91c8439d9ed49fb961233540241101&q=${query}`,
    { mode: 'cors' },
  );
  const weatherData = await response.json();

  console.log(weatherData)
  
  document.querySelector('.location').textContent = `${weatherData.location.name}, 
  ${weatherData.location.country}`;

  // document.querySelector('.time').textContent = weatherData.location.localtime;

  document.querySelector('.temp').textContent = `${weatherData.current.temp_c  }`;

  document.querySelector('.feels-like').textContent = `Feels like: ${weatherData.current.feelslike_c  }\u00B0C`;

  document.querySelector('.wind').textContent = `Wind: ${weatherData.current.wind_kph  } km/h
  ${weatherData.current.wind_dir  }`;

  document.querySelector('.humidity').textContent = `Humidity: ${weatherData.current.humidity  }%`;

  document.querySelector('.conditions').textContent = `${weatherData.current.condition.text  }`;
};

getWeather();

const search = document.querySelector('.search');

search.addEventListener('keyup', (event) => {
  console.log()
  if (event.code === 'Enter' && document.activeElement === event.target) {
    getWeather(event.target.value);
    document.querySelector('.container').style.background = 'linear-gradient(to bottom, #ffffff, #00151b)';
  }
  
});
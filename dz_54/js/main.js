
function onLoadHandler() {

  const roundNum = (item) => Math.round(item);
  const capitalLetter = (str) => str[0].toUpperCase() + str.substring(1);

  const renderHtmlWeather = (data) => {
    const {
      name,
      temp,
      pressure,
      description,
      humidity,
      speed,
      deg,
      icon,
    } = data;

    return `<div class="weather">
              <div class="search_weather">
                <h1>Weather in your city</h1>
                <input type="text" id="input_search" placeholder="Search...">
              </div>
              <div class="details_weather">
                <div class="details_weather_city">
                  <span class="city_name">${name}</span>
                  <img class="img_city_conditions" src="http://openweathermap.org/img/w/${icon}.png" alt="weather conditions">
                  <span class="temp">${roundNum(temp)}&deg</span>
                  <span class="description">${capitalLetter(description)}</span>
                </div>
                <div class="other_details">
                  <p class="pressure">${pressure} hPa</p>
                  <p class="speed">${speed} m/s</p>
                  <p class="deg">${deg}&deg</p>
                  <p class="humidity">${humidity} %</>
                </div>
              </div>
            </div>`
  }

  const helperJson = (info) => {
    if (!info.ok) {
       throw new Error(`Помилка запросу, cтатус: ${info.status}`);
    } else {
      return info.json();
    }
  }

  async function getWeatherInfo() {
    const link = 'http://api.openweathermap.org/data/2.5/weather?q=DNIPRO&units=metric&APPID=5d066958a60d315387d9492393935c19';
    const response = await fetch(link)
    .then((response) => helperJson(response))
    .then((data) => {
      const { 
        name,
        main: { temp, pressure, humidity},
        weather: [{ description, icon},],
        wind: { speed, deg},
      } = data;

      const requiredData = {
        name,
        temp,
        pressure,
        description,
        humidity,
        speed,
        deg,
        icon,
      }

      const wrapperWeather = document.createElement('div');
      wrapperWeather.classList.add('wrapper_weather');
      wrapperWeather.innerHTML = renderHtmlWeather(requiredData);
      document.body.append(wrapperWeather);

    }) 
    .catch(() => console.error('Data not found'));      
  }
  getWeatherInfo();
}

window.onload = onLoadHandler;










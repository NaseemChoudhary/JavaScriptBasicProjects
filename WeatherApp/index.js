const cityInput = document.getElementById("cityName");
const fetchBtn = document.getElementById("namebttn");
const weatherBox = document.getElementById("weatherBox");

fetchBtn.addEventListener("click", handleWeatherFetch);

async function handleWeatherFetch(event) {
    event.preventDefault();

    const cityName = cityInput.value
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());

    if (!cityName) {
        return displayError("Please enter a city name.");
    }

    try {
        await showLoading();
        const weatherData = await getWeatherData(cityName);
        displayWeatherData(weatherData, cityName);
    } catch (error) {
        displayError(error.message);
    }
}

async function getWeatherData(city) {
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found.");
    }

    const { latitude, longitude } = geoData.results[0];

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,apparent_temperature,wind_speed_10m,wind_direction_10m&timezone=auto`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    return weatherData.current;
}

function displayWeatherData(data, city) {
    weatherBox.innerHTML = "";
    weatherBox.style.display = "flex";

    const wind = new Wind(data.wind_direction_10m);

    weatherBox.innerHTML = `
        <h3>${city}</h3>
        <h3>${data.temperature_2m}°C</h3>
        <p>Feels Like: ${data.apparent_temperature} °C</p>
        <p>Humidity: ${data.relative_humidity_2m}%</p>
        <p>Wind: ${data.wind_speed_10m} km/h (${wind.getCompassDirection()})</p>
        <p id="Emoji">${WeatherStatus.getStatus(data.weather_code)}</p>
    `;
}

function showLoading() {
    return new Promise((resolve) => {

        weatherBox.style.display = "flex";
        weatherBox.innerHTML = "<p>🚀 Initializing systems...</p>";

        const messages = [
            "🛰️ Hacking NASA satellites...",
            "👽 Contacting alien weather stations...",
            "📡 Aligning cosmic signals...",
            "🌌 Downloading data from space...",
            "☁️ Decoding cloud patterns..."
        ];

        let index = 0;

        const interval = setInterval(() => {
            weatherBox.innerHTML = `<p>${messages[index]}</p>`;
            index++;

            if (index >= messages.length) {
                clearInterval(interval);
                resolve(); // tell JS: loading done
            }
        }, 500);

    });
}

function displayError(message) {
    weatherBox.style.display = "flex";
    weatherBox.innerHTML = `<p class="errormessage">${message}</p>`;
}

class Wind {
    constructor(degree) {
        this.degree = degree;
    }

    getCompassDirection() {
        const directions = [
            "N", "NE", "E", "SE",
            "S", "SW", "W", "NW"
        ];

        const index = Math.round(this.degree / 45) % 8;
        return directions[index];
    }
}


class WeatherStatus {

    static getStatus(code) {

        let status = "Unknown ❓";
        let theme = "";

        if (code === 0) {
            status = "Sunny ☀️";
            theme = "sunny";
        }
        else if (code <= 2) {
            status = "Partly Cloudy ⛅";
            theme = "cloudy";
        }
        else if (code === 3) {
            status = "Cloudy ☁️";
            theme = "cloudy";
        }
        else if (code <= 48) {
            status = "Fog 🌫️";
            theme = "cloudy";
        }
        else if (code <= 55) {
            status = "Drizzle 🌦️";
            theme = "rainy";
        }
        else if (code <= 65) {
            status = "Rain 🌧️";
            theme = "rainy";
        }
        else if (code <= 75) {
            status = "Snow ❄️";
            theme = "snowy";
        }
        else if (code <= 82) {
            status = "Showers 🌧️";
            theme = "rainy";
        }
        else if (code >= 95) {
            status = "Thunderstorm ⛈️";
            theme = "thunder";
        }

        // Apply background theme
        document.body.className = theme;

        return status;
    }
}


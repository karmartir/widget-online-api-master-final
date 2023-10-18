const API_KEY = 'Type your api key here!!!';

const getFormattedWeatherData = async (city, units = 'imperial') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    try {
        const response = await fetch(URL);

        if (!response.ok) {
            new Error('Weather data not found for the provided city.');
        }

        const data = await response.json();

        const {
            main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
            name,
            sys: { country },
            weather,
            wind: { speed },
        } = data;

        const { description, icon } = weather[0];

        return {
            description,
            iconUrl: `https://openweathermap.org/img/wn/${icon}.png`,
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity,
            name,
            country,
            speed,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle the error gracefully, for example, by returning a default weather object
        return {
            description: 'Weather data not available',
            iconUrl: '',
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            name: '',
            country: '',
            speed: 0,
        };
    }
};

export { getFormattedWeatherData };

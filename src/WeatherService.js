const API_KEY = 'ПОСТАВЬТЕ СЮДА ВАШ API_KEY!!!'

const getFormattedWeatherData = async (city, units = 'imperial') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const makeIconURL = (iconId) =>`https://openweathermap.org/img/wn/${iconId}.png`;

const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
    console.log(data)

    const {
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        name,
        sys:{country},
        weather,
        wind:{speed},
    } = data;



    const {description, icon} = weather[0];
    return{
        description,
        iconUrl:makeIconURL(icon),
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

}

export {getFormattedWeatherData}
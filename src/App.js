import './App.css';
import pic from './pictures/sprint.jpg'
import DescriptionWidgets from "./components/DescriptionWidgets";
import {useEffect, useState} from "react";
import {getFormattedWeatherData} from "./WeatherService";

function App() {
    const [city, setCity] = useState('Brooklyn');
    const[weather, setWeather] = useState(null);
    const[units, setUnits] = useState('metric');


    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getFormattedWeatherData(city, units)
            setWeather(data)
        }
        fetchWeatherData()
    }, [units, city]);

    return (
        <div className="App" style={{backgroundImage: `url(${pic})`}}>

            <div className='overlay'>
                {weather && (<div className='container'>
                    <div className='section section_inputs'>
                        <input type="text"
                               placeholder='Enter the City...'
                               name='city'
                        />
                        <button>°F</button>
                    </div>

                    <div className='section section_temperature'>
                        <div className='icon'>

                            {/*todo*/}
                            <h4>{`${weather.name}, ${weather.country}`}</h4>
                            <img src={weather.iconUrl}
                                 alt="weatherIcon"/>
                            <h4>{weather.description}</h4>
                        </div>
                        <div className='temperature'>
                            <h2>{`${weather.temp.toFixed()} º ${units === 'imperial' ? 'F' : 'C'} `}</h2>
                        </div>

                    </div>
                    <DescriptionWidgets
                        weather={weather}
                        units={units}
                    />


                </div>)}
            </div>

        </div>
    );
}

export default App;

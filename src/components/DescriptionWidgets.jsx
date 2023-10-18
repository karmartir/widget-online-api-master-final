import React from 'react';
import "./descriptonWidgets.css";
import {FaArrowDown, FaArrowUp, FaThermometerHalf} from "react-icons/fa";
import {WiBarometer, WiHumidity, WiStrongWind} from "react-icons/wi";
const DescriptionWidgets = ({weather, units}) => {

    const tempUnit = units === 'imperial' ? 'ºF' : 'ºC';
    const windUnit = units === 'imperial' ? 'mph' : 'm/c';

    /*const pressureUnit = units === 'imperial' ? 'hPa' : 'Hg'*/
   /*this option has been disabled because the server
   gives us pressure value only in mBa and no matter you select
   imperial or metric it's a same*/

    const cards = [
        {
            id: crypto.randomUUID(),
            title: <FaArrowDown/>,
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: crypto.randomUUID(),
            icon :<FaArrowUp/>,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: crypto.randomUUID(),
            icon :<FaThermometerHalf/>,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: crypto.randomUUID(),
            icon : <WiBarometer />,
            title: "pressure",
            data: weather.pressure.toFixed(),
            unit: 'mBa',
        },
        {
            id: crypto.randomUUID(),
            icon :<WiHumidity />,
            title: "humidity",
            data: weather.humidity,
            unit: '%',
        },
        {
            id: crypto.randomUUID(),
            icon : <WiStrongWind/>,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ];
    console.log(weather)

    return (
        <div className="section section_descriptionWidgets">

            {cards.map(({id, icon, title, data, unit}) => (

                <div key={id} className="card">

                    <div className="description_card_item">
                        {icon}
                        <small> {title} </small>
                    </div>

                    <h3>{`${data} ${unit}`}</h3>
                </div>
            ))
            };
        </div>
    );
};

export default DescriptionWidgets;
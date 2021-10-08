import React from 'react';
import WeatherIcons from './weathericons';

function WeatherWidget(props) {
  return (
    <div className="weather">
        <WeatherIcons img={props.img}/>
        <p><span>conditions:</span> {props.conditions}</p>
        <p><span>time:</span> {props.time}</p>
      </div>
  );
}

export default WeatherWidget;
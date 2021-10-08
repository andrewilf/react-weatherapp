import React from "react";
import "./styles.css";
import WeatherWidget from "./components/weatherwidget";
import WeatherData from "./weatherData"

export default function App() {
  const data = WeatherData.map((element, index) => {
    return (<WeatherWidget key={index} {...element}/>)
  })
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {data}
      </section>

    </div>
  );
}

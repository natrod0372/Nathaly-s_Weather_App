import React, {useState} from "react";
import RefreshButton from ".components/UI/RefreshButton";
import TemperaturButton from ".components/UI/TemperatureButton";
import LocationButton from ".components/UI/LocationButton";

const App = () => {
  const [temperature, setTemperature] = useState(50);
  const [location, setLocation] = useState("Houston");

  const refreshData = () => {
    alert("Weather data refreshed");
  };

  const changeTemperature = () => {
    setTemperature(Math.floor(Math.random() * 35) =5);
  };

  const changeLocation = () => {
    const locations =["Houston", "Humble", "New Caney", "Conroe"];
    setLocation(locations[Math.floor(Math.random() * location.length)]);
  };

  return (
    <div style = {{
      textAligh : "center",
      marginTop: "50px"
    }}>
    <h1>Nathaly's Weather App</h1>
    <h2>Location: {location}</h2>
    <h2>Temperature: {temperature}</h2>
    <RefreshButton onClick={refreshData} />
    <TemperatureButton onClick={changeTemperature} />
    <LocationButton onClick={changeLocation} />
    </div>
  );

};

export default App;

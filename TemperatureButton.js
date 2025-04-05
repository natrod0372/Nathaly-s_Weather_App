import React from "react";

const TemperatureButton = ({ onClick}) => {
    return (
        <button onClick={onClick} style={{margin: "10px"}}>
        Change Temperature
        </button>
    );
};

export default TemperatureButton;
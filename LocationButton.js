import React from "react";

const LocationButton = ({onClick }) => {
    return (
        <button onclick={onClick} style={{margin: "10px"}}>
        Change Location
        </button>
    );
};

export default LocationButton;
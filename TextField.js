const updateLocation = () => {
    const sanitizedLocation = customLocation.trim();
    if (sanitizedLocation) {
        setLoacation(sanitizedLocation);
        setCustomLocation("");
    } else {
        alert ("Please enter a valid location");
    }
};

const zipCodeMapping = {
    "30060": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },
    // Add all other zip codes here...
};

function findZone() {
    const zipCode = document.getElementById("zipCodeInput").value;
    const result = zipCodeMapping[zipCode];
    if (result) {
        document.getElementById("output").innerHTML = 
            `You are in ${result.zone}. Your service day is ${result.serviceDay}. <a href="${result.bookingLink}">Click here to book</a>.`;
    } else {
        document.getElementById("output").innerHTML = "Sorry, we do not service your area.";
    }
}

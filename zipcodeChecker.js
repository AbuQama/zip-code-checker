// Define the zip code to zone mappings
const zipCodeMapping = {
    // Zone 1 (Yellow)
    "30060": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },
    "30062": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },
    "30064": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },
    "30066": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },
    "30067": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },
    "30068": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },
    "30080": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },
    "30082": { zone: "Zone 1 (Yellow)", serviceDay: "Monday", bookingLink: "your-setmore-link-zone1" },

    // Zone 2 (Orange)
    "30328": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30342": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30350": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30075": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30076": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30338": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30346": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30360": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30004": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30005": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30009": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30022": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30023": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },
    "30319": { zone: "Zone 2 (Orange)", serviceDay: "Tuesday", bookingLink: "your-setmore-link-zone2" },

    // Zone 3 (Red)
    "30005": { zone: "Zone 3 (Red)", serviceDay: "Wednesday", bookingLink: "your-setmore-link-zone3" },
    // Add remaining zip codes for all zones following this format...
};

// Function to handle zip code input
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

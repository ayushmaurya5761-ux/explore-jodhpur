// config.js - Explore Jodhpur ki saari Setting ek jagah

const CONFIG = {
    siteName: "Explore Jodhpur",
    city: "Jodhpur",
    currency: "₹",

    // Fort ki Details
    fort: {
        name: "Mehrangarh Fort",
        openTime: "09:00 AM",
        closeTime: "05:00 PM",
        indianPrice: 100,
        foreignPrice: 600,
        cameraPrice: 100,
        videoPrice: 200
    },

    // Booking ke Price - Yahi se Calculator chalega
    prices: {
        guidePerDay: 1500,
        hotelPerNight: 3000,
        cabPerDay: 2000,
        basePerPersonPerDay: 500
    },

    // Slider ki Setting
    slider: {
        autoSlideTime: 5000 // 5 second
    },

    // Weather - Baad me yaha apni API Key daalna
    weather: {
        apiKey: "APNI_API_KEY_YAHA_DALO",
        defaultTemp: "32°C",
        defaultDesc: "Sunny",
        defaultHumidity: "25%",
        defaultWind: "12 km/h"
    }
};
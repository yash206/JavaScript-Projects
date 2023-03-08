window.addEventListener("load", () => {
    let long, lat;
    const temperatureUnit = document.querySelector(".temperature-unit");
    const temperatureDegree = document.querySelector(".temperature-degree");
    const degree = document.querySelector(".degree");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const APIkey = 'bca24326dba46542257a7fa51db12deb'
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    document.querySelector(".temperature-degree").textContent = Math.round(data.main.temp - 273.15);
                    document.querySelector(".temperature-description").textContent = data.weather[0].description.toUpperCase();
                    document.querySelector(".location-timezone").textContent = data.name;
                    document.querySelector(".location-icon").innerHTML = `<img src = "images/${data.weather[0].icon}.png"/>`;

                    let initial_temperature = temperatureDegree.textContent;
                    degree.addEventListener("click", () => {
                        if (temperatureUnit.textContent === '\u00B0F') {
                            initial_temperature = [(initial_temperature - 32) * 5] / 9;
                            temperatureDegree.innerHTML = Math.round(initial_temperature);
                            temperatureUnit.innerHTML = '\u00B0C'
                        }
                        else if(temperatureUnit.textContent === '\u00B0C') {
                            initial_temperature = (initial_temperature * (9 / 5)) + 32
                            temperatureDegree.innerHTML = Math.round(initial_temperature);
                            temperatureUnit.innerHTML = '\u00B0F'
                        }
                    });
                })

        })
    } else {
        document.querySelector(".location-timezone").innerHTML = 'Please allow location permission <br> for fetching your location!!!';
    }
});

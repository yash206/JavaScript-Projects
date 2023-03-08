window.addEventListener("load", ()=>{
    let long,lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=apparent_temperature`;
            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    document.querySelector(".temperature-degree").innerHTML = Math.round(data.hourly.apparent_temperature[0]);
                    document.querySelector(".temperature-unit").innerHTML = data.hourly_units.apparent_temperature;
                    document.querySelector(".location-timezone").innerHTML = data.timezone;
                    console.log(data)
                })
        })
    }else{
        document.querySelector(".location-timezone").innerHTML = 'Please allow location permission <br> for fetching your location!!!';
    }
});




const temperatureUnit = document.querySelector(".temperature-unit");
const temperatureDegree = document.querySelector(".temperature-degree");
const degree = document.querySelector(".degree");
let initial_temperature = temperatureDegree.textContent;
degree.addEventListener("click", ()=>{
    if(temperatureUnit.textContent == '&deg;F'){
        initial_temperature = [(initial_temperature - 32) * 5] / 9;
        temperatureDegree.innerHTML = Math.round(initial_temperature);
        temperatureUnit.innerHTML = '&deg;C'
    }
    else{
        initial_temperature = (initial_temperature * (9/5)) + 32
        temperatureDegree.innerHTML = Math.round(initial_temperature);
        temperatureUnit.innerHTML = '&deg;F'
    }
})
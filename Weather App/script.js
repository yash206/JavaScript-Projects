window.addEventListener("load", ()=>{
    let long,lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const APIkey = 'bca24326dba46542257a7fa51db12deb'
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    // document.querySelector(".temperature-degree").innerHTML = Math.round(data.data[0].app_temp);
                    // document.querySelector(".temperature-unit").innerHTML = data.hourly_units.apparent_temperature;
                    // document.querySelector(".timezone").innerHTML = 'Timezone: &nbsp; &nbsp;' + data.data[0].timezone;
                    // document.querySelector(".loc").innerHTML = 'Location:&nbsp;&nbsp;' + data.data[0].city_name;
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
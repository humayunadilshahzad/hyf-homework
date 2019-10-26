const WeatherAPI_KEY = 'add998e83c83665a1608e02815174bfd';
let myUrl;
let button = document.querySelector("button");
let weatherIconUrl = 'http://openweathermap.org/img/wn/';
city = document.querySelector("input").value;

button.addEventListener("click", () => {

    city = document.querySelector("input").value;
    if (city == "") {
        alert("Please enter city name...");
        return;
    }
    let weatherImage = document.createElement("img");

    myUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + WeatherAPI_KEY;
    fetch(myUrl)
        .then((res) => res.json())
        .then(weather => {
            let myDiv = document.getElementById("weather");
            //console.log(myUrl);
            //console.log(weather);
            //console.log(weather.name);
            //console.log(weather.main.temp - 273.15);
            //console.log(weatherIconUrl + weather.weather[0].icon + '.png');
            //console.log(myDiv)
            //console.log(document.body);
            //console.log(weather.wind.speed);
            //console.log(weather.clouds.all);
            //console.log((new Date(weather.sys.sunrise * 1000)).toLocaleTimeString());
            //console.log((new Date(weather.sys.sunset * 1000)).toLocaleTimeString());
            //console.log(weather.sys.sunset);
            // console.log(weather.main.pressure);

            weatherImage.src = weatherIconUrl + weather.weather[0].icon + '.png';

            let weatherDiv = document.createElement("div");
            let weatherCity = document.createElement("p");
            let temperature = document.createElement("p");
            let windSpeed = document.createElement("p");
            let cloudines = document.createElement("p");

            weatherCity.innerHTML = `City: ${weather.name} , ${weather.sys.country} 
            Temperature: ${Math.floor(weather.main.temp - 273.15)} C`;
            
            temperature.innerHTML = `<h6>Sunrise: ${(new Date(weather.sys.sunrise * 1000)).toLocaleTimeString()}
            </h6><h6>Sunset: ${(new Date(weather.sys.sunset * 1000)).toLocaleTimeString()}</h6>`;
            
            windSpeed.innerHTML = `<h6>Wind Speed: ${weather.wind.speed} m/s</h6>`;
            cloudines.innerHTML = `<h6>Clouds: ${weather.clouds.all} %</h6>`;

            weatherDiv.appendChild(weatherImage);
            weatherDiv.appendChild(weatherCity);
            weatherDiv.appendChild(temperature);
            weatherDiv.appendChild(windSpeed);
            weatherDiv.appendChild(cloudines);

            myDiv.appendChild(weatherDiv);



        })
    //.catch((err) => { console.log(err.message); });
});


// function weatherDisplay(){
//     let weatherDiv=document.createElement("div");
//     let weatherCity=document.createElement("p");
//     weatherCity.innerHTML="<h6>${weather.name}</h6>";
//     weatherDiv.appendChild(weatherCity);
//     document.body.appendChild(weatherCity);
// }
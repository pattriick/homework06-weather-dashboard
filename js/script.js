


let lat = 0;
let lon = 0;

var Srchbtn = document.getElementById('srchbtn');


var weather = [
    { temperature : '', Wind : '' , Humidity : '' },
    { temperature : '', Wind : '' , Humidity : '' },
    { temperature : '', Wind : '' , Humidity : '' },
    { temperature : '', Wind : '' , Humidity : '' },
    { temperature : '', Wind : '' , Humidity : '' },
];


function getCity () {
    let city = document.getElementById('whatcity').value;

    console.log(whatcity.value);

    console.log(city);
    
    var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=6cfdbf06909e62bf85aa67f8d761af43`;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        lat = data[0].lat;
        lon = data[0].lon;
        console.log(lat);
        console.log(lon);
        getWeather();
    });
}











function getWeather () {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6cfdbf06909e62bf85aa67f8d761af43`;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        // Use the console to examine the response
        console.log(data);

        for( i = 0; i < weather.length; i++) {
            weather[i].temperature = data.list[0].main.temp;
        }

        console.log(weather)

        // const weatherTxt = document.createElement("p");

        // const weatherNew = document.te(weather);

        // weatherTxt.appendChild(weatherNew);


    });
}


















Srchbtn.addEventListener('click', getCity);
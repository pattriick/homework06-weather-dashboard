
let lat = 39.2904
let lon = 76.6122



var Srchbtn = document.getElementById('searchinfo');


function getWeather () {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={${lat}}&lon={${lon}}&appid={6cfdbf06909e62bf85aa67f8d761af43}`;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        console.log(data.results);

});
}


















Srchbtn.addEventListener('click', getWeather);
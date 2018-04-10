//Get user geolocation https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation

var x = document.getElementById("demo");
var y = document.getElementsByTagName("img")[0]
var tempType = 0;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var lat = Math.round(position.coords.latitude);
  var lon = Math.round(position.coords.longitude);
  console.log("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon);
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
  console.log(url);

  $.getJSON(url, function(data) {
    var items = [];
    console.log(data.main.temp);
    console.log(data.main.temp);
    console.log(data.weather[0].icon);
    x.innerHTML = data.main.temp;
    document.getElementById("type").innerHTML = "C";
    y.setAttribute("src", data.weather[0].icon);
  });
}

function changeWeather() {
  var temp = document.getElementById("demo");
  console.log(temp);
  if (tempType === 0) {

    temp.innerHTML = (Math.round(document.getElementById("demo").innerHTML * 1.8 + 32));
    document.getElementById("type").innerHTML = "F";
    tempType += 1;

  } else if (tempType === 1) {
    temp.innerHTML = (Math.round(document.getElementById("demo").innerHTML - 32) * (5 / 9));
    document.getElementById("type").innerHTML = "C";
    tempType -= 1;

  }
}

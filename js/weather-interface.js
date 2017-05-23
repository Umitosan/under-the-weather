var Humidity = require("./../js/humidity.js").humidityModule;
var Temperature = require("./../js/temperature.js").temperatureModule;

var displayHumidity = function(city, humidityData) {
  $(".showHumidity").text("The humidity in " + city + " is " + humidityData + "%.");
};

var displayTemperature = function(city, temperatureData) {
  $(".showTemp").text("The temperature in " + city + " is " + temperatureData + "°F");
};


$(document).ready(function(){
  var currentHumidity = new Humidity();
  var currentTemperature = new Temperature();
  $('#request_city_humidity').click(function() {
    var city = $("#city").val();
    console.log(city);
    currentHumidity.getHumidity(city, displayHumidity);
  });
  $('#request_city_temp').click(function() {
    var city = $("#city").val();
    console.log(city);
    currentTemperature.getTemperature(city, displayTemperature);
  });
});

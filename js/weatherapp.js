$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatitude = parseFloat(Math.round(position.coords.latitude * 100) / 100).toFixed(2);
      var myLongitude = parseFloat(Math.round(position.coords.longitude * 100) / 100).toFixed(2);
      
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+myLatitude+"&lon="+myLongitude+"&id=524901&appid=ca8c2c7970a09dc296d9b3cfc4d06940", function(json) {
    $('#location').html(json.name + ', ' + json.sys.country);
    $('#temperature').html(parseInt(json.main.temp) - 275);
    $('#cloud-forecast').html(json.weather[0].main + '/ '+ json.weather[0].description);
    $('#unit').html('C');
    //WEATHER CONDITIONS FOUND HERE: http://openweathermap.org/weather-conditions
    console.log(json.weather[0].main);
    json.weather[0].main = "Clear";
    switch (json.weather[0].main) {
      case "Clouds":
        $('#diagnostic-temperature').html("C'est gris dehors.");
        $('#icon').addClass('icon cloudy');
        $('#icon').append('<div class="cloud"></div>');
        $('#icon').append('<div class="cloud"></div>');
        $('#solution-temperature').html("Prends un café et appelle-moi!");
        console.log('ok');
        break;
      case "Clear":
        $('#weather-app').css("background-color", "#0000AA");
        $('#icon').addClass('icon sunny clear');
        $('#icon').append('<div class="sun"></div>');
        $('.sun').append('<div class="rays"></div>');
        console.log('non');
      break;
      case "Snow":
        $('#icon').addClass('icon flurries');
        $('#icon').append('cloud');
        $('#icon').append('snow');
      break;
      case "Rain":
        $('#diagnostic-temperature').html("Il pleut dehors.");
        $('#icon').addClass('icon rainy');
        $('#icon').append('<div class="cloud"></div>');
        $('#icon').append('<div class="rain"></div>');
        $('#solution-temperature').html("Prends un café et appelle-moi!");
        break;
      //case "Dizzle":
      //case: "Thunderstorm"

    }
  });        
  });
  }else{
    $("#location").html("Please turn on Geolocator on Browser.")
  }
});
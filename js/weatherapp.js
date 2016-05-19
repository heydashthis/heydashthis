$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatitude = parseFloat(Math.round(position.coords.latitude * 100) / 100).toFixed(2);
      var myLongitude = parseFloat(Math.round(position.coords.longitude * 100) / 100).toFixed(2);
      
  $.ajax({
      url: "https://api.forecast.io/forecast/df76430db2bad3f9ef6d03aebba0f0aa/"+myLatitude+","+myLongitude,
      dataType: "jsonp",
      success: function(json) {
    //WEATHER CONDITIONS FOUND HERE: http://openweathermap.org/weather-conditions
    console.log(json);
    var currentWeather = json.currently.icon;
    switch (currentWeather) {
      case "partly-cloudy-day":
      case "partly-cloudy-night":
      case "cloudy":
        $('#diagnostic-temperature').html("C'est gris dehors");
        $('#icon').addClass('icon cloudy');
        $('#icon').append('<div class="cloud"></div>');
        $('#icon').append('<div class="cloud"></div>');
        $('#solution-temperature').html('Prends un café et ');
        console.log('ok');
        break;
      case "clear-day":
      case "clear-night":
        $('#diagnostic-temperature').html("Il fait beau dehors");
        $('#icon').addClass('icon sunny clear');
        $('#icon').append('<div class="sun"></div>');
        $('.sun').append('<div class="rays"></div>');
        $('#solution-temperature').html('Prends une bière et ');
        console.log('non');
      break;
      case "snow":
      case "sleet":
        $('#diagnostic-temperature').html("Il neige dehors???!!!!");
        $('#icon').addClass('icon ');
        $('#icon').append('<div class="cloud"></div>');
        $('#icon').append('<div class="snow"></div>');
        $('.snow').append('<div class="flake"></div>');
        $('.snow').append('<div class="flake"></div>');
        $('#solution-temperature').html('Reste calme et ');
      break;
      case "fog":
      case "rain":
        $('#diagnostic-temperature').html("Il pleut dehors");
        $('#icon').addClass('icon rainy');
        $('#icon').append('<div class="cloud"></div>');
        $('#icon').append('<div class="rain"></div>');
        $('#solution-temperature').html('Prends un café et ');
        break;
      case "wind":
        $('#diagnostic-temperature').html("Le temps est bizarre en ce moment");
        $('#icon').addClass('icon thunder-storm thunderstorm');
        $('#icon').append('<div class="cloud"></div>');
        $('#icon').append('<div class="lightning"></div>');
        $('.lightning').append('<div class="bolt"></div>');
        $('.lightning').append('<div class="bolt"></div>');
        $('#solution-temperature').html('Sors dehors ou ');
        break;
      default:
        $('#diagnostic-temperature').html("Le temps est indescriptible en ce moment");
        $('#solution-temperature').html('Oublie le temps et ');
        break;
          }
        }
      });
    });      
    } else {
    $("#location").html("Ouvre ton géolocaliseur et")
    }

});


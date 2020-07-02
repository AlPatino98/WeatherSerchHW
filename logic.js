
//set up variables
var APIKey = "25e3a4e6b1b1e4ea16cd382de8c61270";
var queryTerm = "";

// Function to display current weather

function displayWeather(){

var cityName = $("#search-term").val();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

//create an element for previous searches
var oldSearch = $("<li>").text(cityName);

//display previous searches
$("#previous-term").prepend(oldSearch);



//Ajax call
$.ajax({
    url: queryURL,
    method: "GET" })
//store all of the retrived data in object "weatherData"
.then(function(weatherData){

//Element for Variable Name
 var nameW = (weatherData.name);
 var wName = $("<h3>").text( nameW)

 //Element for Variable Icon
 var iconW = weatherData.weather.icon;
 var wIcon = $("<img>").attr("src", iconW);

 //Element for Variable Weather
 var weathW = weatherData.weather.description;
 var weather = $("<h5>").text("Condition: "+ weathW);

 //Element for Variable Date
 var dateW = weatherData.dt;
 var wDate = $("<h5>").text("Date: "+ dateW);

//Element for Variable Temp
 var tempW = (weatherData.main.temp - 273.15) * 1.80 + 32;
  var pTemp = $("<h5>").text("temp: " + tempW.toFixed(2));

  //Element for Variable Humidity
 var humW = weatherData.main.humidity;
 var wHum = $("<h5>").text("Humidity: "+ humW +"%");

 //Element for Variable Wind Speed
 var windW = weatherData.wind.speed;
 var wWind = $("<h5>").text("Wind Speed: "+ windW +"MPH");
 

 $("#weatherResults").append(wName, wIcon, pTemp, weather, wDate, wHum, wWind );
 
});
    
}
//function to display Forecast
function displayForecast(){

    var Cityname = $("#search-term").val();
    var FqueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + Cityname +"&appid=" + APIKey;
    
    //Ajax call
    $.ajax({
        url: FqueryURL,
        method: "GET" })
    //store all of the retrived data in object "weatherData"
    .then(function(forecastData){
    
//  Element for Variable Name
 var nameF = forecastData.city.name;
 var fName = $("<h3>").text(nameF);
    
 //loop through the span of forecast days
    for (var i = 0; i < forecastData.list.length; i++); {

   var tempF = (forecastData.list[i].main.temp - 273.15) * 1.80 + 32;
 var fTemp = $("<p>").text("temp: " + tempF.toFixed(2));

//  Element for Variable Icon
 var iconF = forecastData.list[i].weather.icon;
 var fIcon = $("<img>").attr("src", iconF);

//  Element for Variable Weather
 var weathF = forecastData.list[i].weather.description;
 var feather = $("<h5>").text("Condition: "+ weathF);

 //Element for Variable Date
 var dateF = forecastData.list[i].dt;
 var fDate = $("<h5>").text("Date: "+ dateF);

  //Element for Variable Humidity
 var humF = forecastData.list[i].main.humidity;
 var fHum = $("<h5>").text("Humidity: "+ humF +"%");

 //Element for Variable Wind Speed
 var windF = forecastData.list[i].wind.speed;
 var fWind = $("<h5>").text("Wind Speed: "+ windF +"MPH");

//Element for variable temp


         console.log(forecastData.list[i]);

         //Append temp to html
          $("#forecastResults").append(fTemp, fIcon, feather, fDate, fHum, fWind);
        } 
        $("#forecastResults").append(fName);
     });
   }


//Run function on click of the search button
$("#run-search").on("click",function(event){
// prevent default
    event.preventDefault();
   
    // run finction display weather
    displayWeather();
    displayForecast();


});
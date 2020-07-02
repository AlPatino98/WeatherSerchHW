
//set up variables
var APIKey = "25e3a4e6b1b1e4ea16cd382de8c61270";
var queryTerm = "";
var startDate = 0;
var endDate = 0;

// Function to display current weather
function displayWeather(){

var cityName = $("#search-term").val();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

//Ajax call
$.ajax({
    url: queryURL,
    method: "GET" })
//store all of the retrived data in object "weatherData"
.then(function(response){

//Element for Variable Name
 var nameW = (response.name);
 var wName = $("<h3>").text( nameW)

 //Element for Variable Icon
 var iconW = (response.weather.icon);
 var wIcon = $("<img>").attr("src", iconW)

 //Element for Variable Weather
 var weathW = (response.weather.description);
 var weather = $("<h5>").text("Condition: "+ weathW)

 //Element for Variable Date
 var dateW = (response.dt);
 var wDate = $("<h5>").text("Date: "+ dateW)

//Element for Variable Temp
 var tempW = (response.main.temp - 273.15) * 1.80 + 32;
  var pTemp = $("<h5>").text("temp: " + tempW.toFixed(2));

  //Element for Variable Humidity
 var humW = (response.main.humidity);
 var wHum = $("<h5>").text("Humidity: "+ humW +"%")

 //Element for Variable Wind Speed
 var windW = (response.wind.speed);
 var wWind = $("<h5>").text("Wind Speed: "+ windW +"MPH")
 

 $("#weatherResults").append(wName, wIcon, pTemp, weather, wDate, wHum, wWind );
 
});
    
}
//function to display Forecast
function displayForecast(){

    var cityName = $("#search-term").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName +"&appid=" + APIKey;
    
    //Ajax call
    $.ajax({
        url: queryURL,
        method: "GET" })
    //store all of the retrived data in object "weatherData"
    .then(function(response){
    //  console.log(response);
    
 //loop through the span of forecast days
    for (var i = 0; i < response.list.length; i++) {

        //Element for Variable Name
 var nameW = (response.name);
 var wName = $("<h3>").text( nameW)

 //Element for Variable Icon
 var iconW = (response.list.weather.icon);
 var wIcon = $("<img>").attr("src", iconW)

 //Element for Variable Weather
 var weathW = (response.weather.description);
 var weather = $("<h5>").text("Condition: "+ weathW)

 //Element for Variable Date
 var dateW = (response.list.dt);
 var wDate = $("<h5>").text("Date: "+ dateW)

  //Element for Variable Humidity
 var humW = (response.list.main.humidity);
 var wHum = $("<h5>").text("Humidity: "+ humW +"%")

 //Element for Variable Wind Speed
 var windW = (response.list.wind.speed);
 var wWind = $("<h5>").text("Wind Speed: "+ windW +"MPH")

//Element for variable temp
 var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;
 var pTemp = $("<p>").text("temp: " + tempF.toFixed(2));

        //  console.log(response.list[i]);

         //Append temp to html
          $("#forecastResults").append(wName, wIcon, pTemp, weather, wDate, wHum, wWind );
    }

    //  var pTemp = $("<p>").text("temp: ");
        
     
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
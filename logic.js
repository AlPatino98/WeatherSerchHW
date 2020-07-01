
//set up variables
var APIKey = "25e3a4e6b1b1e4ea16cd382de8c61270";
var queryTerm = "";
var startDate = 0;
var endDate = 0;

// Functions
function displayWeather(){

var cityName = $("#search-term").val();
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
var queryURL = "api.openweathermap.org/data/2.5/weather?q=austin&appid=25e3a4e6b1b1e4ea16cd382de8c61270";

console.log(queryURL);

    
}

//Run function on click of the search button
$("#run-search").on("click",function(event){
      // prevent default
    event.preventDefault();

var queryURL = "api.openweathermap.org/data/2.5/weather?q=austin&appid=25e3a4e6b1b1e4ea16cd382de8c61270";

//Ajax call
     $.ajax({
        url: queryURL,
        method: "GET"
    })//store all of the retrived data in object "weatherData"
    .then(function(response){
        console.log(response);
  
        
});
   
    // run finction display weather
    displayWeather();
});
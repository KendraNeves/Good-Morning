$(document).ready(function(){

let weatherResults;
let quoteResults;
let giphyResults;
let city = "baltimore";
let todaysWeather;


     
    function getData() {
       
  
    // Weather.com API call   
        var weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8a9c8778f33ed43d7abdebc8755bbe26`;
  
        $.ajax({
          url: weatherURL,
          method: "GET"
        })
          // After the data comes back from the API
          .then(function(response) {
            todaysWeather = response.list[0].weather[0].main;
            // $(".weather");
            weatherResults = response;
            console.log(todaysWeather);
            console.log(weatherResults);
          
            //Giphy API call  
            let giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=EoOpVBR1iwX79kRrJD7H87WRcvf5B07o&q=${todaysWeather}&limit=25&offset=0&rating=G&lang=en`
            $.ajax({
                url: giphyURL,
                method: "GET"
            })
            .then(function(response){
                giphyResults = response;
                $("#giphy").attr("src", response.data[Math.floor(Math.random() *24)].images.fixed_height.url);
                
                console.log(giphyResults);
            });




        
        });
               
     
    

    
   

    //Quote API call
    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://quotable-quotes.p.rapidapi.com/randomQuotes",
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "quotable-quotes.p.rapidapi.com",
    //         "x-rapidapi-key": "4669f6757dmshb7f8fff52ad3cd0p1237d0jsn70f7bc829884"
    //     }
    // }
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });   
}

getData()

});


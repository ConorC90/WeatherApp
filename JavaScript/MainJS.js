var app = new Vue({
    el: '#app',
    data: {
        theRealDay2 : [],
        weatherinfo: [],
        weatherForecast: [],
        morningWeather: [],
        eveningWeather: [],
        nightWeather: [],
        search: "",
        todayDate: [],
        theWeatherDay1: [],
        theWeatherDay2: [],
        theWeatherDay3: [],
        theWeatherDay4: [],
        theWeatherDay5: [],
    },

    methods: {

        
        filteredCities() {
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.search + "&appid=1c6194ae99aee3a4c8edeec8aad03a80&units=metric"

            var allWeather;

            fetch(url, {}).then(function (response) {
                    {
                        return response.json();
                    }
                }).then(function (json) {
//                    console.log(json);
                    app.weatherinfo = json;
                    console.log(json);


                })
                .catch(function (error) {
                    document.getElementById("errorDiv").innerHTML = "error.message";
                    console.log("Request failed: " + error.message);
                });


            console.log("Hello")
        },

        filteredCities2() {
            var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + this.search + "&appid=1c6194ae99aee3a4c8edeec8aad03a80&units=metric"

            var allWeather;

            fetch(url, {}).then(function (response) {
                    {
                        return response.json();
                    }
                }).then(function (json) {
//                    console.log(json);
                    app.weatherForecast = json;
                    console.log(json);


                })
                .catch(function (error) {

                    console.log("Request failed: " + error.message);
                  document.getElementById(errorDiv).innerHTML = "error.message";
                });


            console.log("Hello")
        },
         the5Days() {
    var day1Weather = []
    var day2Weather = []
    var day3Weather = []
    var day4Weather = []
    var day5Weather = []

    for (var i = 0; i < app.weatherForecast.list.length; i++) {
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day1)) {
            day1Weather.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day2)) {
            day2Weather.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day3)) {
            day3Weather.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day4)) {
            day4Weather.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day5)) {
            day5Weather.push(app.weatherForecast.list[i]);
        }
    }

    app.theWeatherDay1 = day1Weather
    app.theWeatherDay2 = day2Weather
    app.theWeatherDay3 = day3Weather
    app.theWeatherDay4 = day4Weather
    app.theWeatherDay5 = day5Weather 

}


    },
        
})


 function the5Days() {
    var day1Weather = []
    var day2Weather = []
    var day3Weather = []
    var day4Weather = []
    var day5Weather = []

    for (var i = 0; i < app.weatherForecast.list.length; i++) {
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day1)) {
            day1Weather.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day2)) {
            day2Weather.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day3)) {
            day3Weather.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day4)) {
            day4Weather.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(0, 10) == formatDate(day5)) {
            day5Weather.push(app.weatherForecast.list[i]);
        }
    }

    app.theWeatherDay1 = day1Weather
    app.theWeatherDay2 = day2Weather
    app.theWeatherDay3 = day3Weather
    app.theWeatherDay4 = day4Weather
    app.theWeatherDay5 = day5Weather 

}


function morningDayNight() {
    var morning = [];
    var evening = [];
    var night = [];
    for (var i = 0; i < app.weatherForecast.list.length; i++) {
        if (app.weatherForecast.list[i].dt_txt.slice(-8) == "09:00:00") {
            morning.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(-8) == "18:00:00") {
            evening.push(app.weatherForecast.list[i]);
        }
        if (app.weatherForecast.list[i].dt_txt.slice(-8) == "00:00:00") {
            night.push(app.weatherForecast.list[i]);
        }
    }
    console.log(morning);
    console.log(evening);
    console.log(night);

    app.morningWeather = morning;
    app.eveningWeather = evening;
    app.nightWeather = night;

}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');

}

//var theRealDay1 = formatDate(day1)
//app.theRealDay2 = formatDate(day2)
//var theRealDay3 = formatDate(day3)
//var theRealDay4 = formatDate(day4)
//var theRealDay5 = formatDate(day5)






var day1 = new Date()
var day2 = new Date();
day2.setDate(day2.getDate() + 1);
var day3 = new Date();
day3.setDate(day3.getDate() + 2);
var day4 = new Date();
day4.setDate(day4.getDate() + 3);
var day5 = new Date();
day5.setDate(day5.getDate() + 4);

/*
Show the Local Weather App for freeCodeCamp challenge.
It shows the weather to a user in her/his current location.
It shows the different icon or background image (e.g. snowy mountain, hot 
desert) depending on the weather.
A user may push a button and toggle between Fahrenheit and Celsius.
*/

(function Weather () {
    "use strict";

    var celsius = "&#186;" + "C";
    var fahrenheit = "&#186;" + "F";

    /*
    Takes id of a HTML element as a string. 
    Returns the HTML element with the provided id.
    */
    function findElement (elementId) {
        var element = document.getElementById(elementId);
        return element;
    }
    
    //Shows loading gif when page is loading.
    function showLoading(element) {
        element.innerHTML = "<div id='loading'>" +
            "<img src='https://dl.dropbox.com/s/38b3o9g22uiyf71/loader.gif?dl=0' alt='Loading gif'></div>";
    }

    /*
    Finds elements in which information on the temperature is stored. Checks the
    current scale that is used to display the temperature (Celsius or Fahrenheit).
    Recalculates the value of temperature in other scale and displays it in the
    relevant HTML element. It shows one digit after decimal point if this digit
    is different than zero. Otherwise shows the whole number (that is - if 
    recalculated value is 11.0 it displays 11, if it is 11.8 it displays 11.8).
    */
    var scaleConverter = function () {
        var temperature = findElement("temperature");
        var otherScale = findElement("converter");
        var currentValue = findElement("tempValue").innerHTML;
        var precision = 1;
        var newValue;
        var buttonDisplay;
        var scale;
        if (otherScale.innerHTML == "Fahrenheit") { 
            /*Celsius to Fahrenheit: multiply by 1.8 (or 9/5) and add 32.*/
            newValue = (currentValue * 1.8 + 32).toFixed(precision);
            buttonDisplay = "Celsius";
            scale = fahrenheit;
        }
        else { 
            /*Fahrenheit to Celsius: subtract 32 and multiply by .5556 (or 5/9)*/
            newValue = ((currentValue -32)* 0.5556).toFixed(precision);
            buttonDisplay = "Fahrenheit";
            scale = celsius;
        }
            
        if (newValue.search(/0$/) != -1) { 
            newValue = newValue.slice(0, newValue.search(/0$/)-1);
        }
    
        temperature.innerHTML = "" +
        "<span id='tempValue'>" + newValue + "</span>" + 
        "<span id='scale'>" + scale + "</span>" + 
        "<div>";
        otherScale.innerHTML = buttonDisplay;
    };

    /*
    Checks whether geolocation is implemented in a given browser. If not, displays
    appropriate message. If it's possible to check whether a user's permission
    for checking geolocation has been granted, checks its. If it has been granted
    immediately calls displayLocalWheather without displaying welcome message.
    Otherwise displays welcome message.
    */
    function selectContent (element) {
        if (navigator.geolocation) {
            if (navigator.permissions) {
                navigator.permissions.query({name:'geolocation'}).then(function(result) {
                    console.log(result.state);
                    if (result.state == 'granted') {
                        displayLocalWeather(element);
                    }
                    else if (result.state == 'prompt') {
                        element.innerHTML = "" +
                            "<div id='welcomeMessage' class='secondary'>" +
                            "<p>Welcome to Local Weather Oracle</p>" +
                            "<p>To see the weather You have to allow us to check your location.</p>" +
                            "</div>";
                        displayLocalWeather(element);
                    }
                    else if (result.state == 'denied') {
                        element.innerHTML = "<div id='denied' class='secondary'>" +
                            "Sorry we are unable to show you the local weather. " +
                            "You have denied us the permission to check your geolocation. " + "</div>";
                    }
                });
            }

            else {
                element.innerHTML = "" +
                    "<div id='welcomeMessage' class='secondary'>" +
                    "<p>Welcome to Local Weather Oracle</p>" +
                    "<p>To see the weather you have to allow us to check your location.</p>" +
                    "</div>";
                displayLocalWeather(element);
            }
        }
        else
            element.innerHTML = "<div id='noSupport' class='secondary'>" +
                "Oppps. Geolocation is not supported in this browser" +
                "</div>"; 
    }


    function displayLocalWeather (element) {

        navigator.geolocation.getCurrentPosition(success, error);
        
        function error(e) {
            var message;
            if (e.code == 1) {
                message = "<div id='denied' class='secondary'>" +
                    "Sorry we are unable to show you the local weather. " +
                    "You have denied us the permission to check your geolocation. " + "</div>";
            }
            else {
                message = "<div id='error' class='secondary'>" + 
                                "Geolocation error " + 
                                e.code + ": " + e.message + 
                                "</div>";
            }
            element.innerHTML = message;
        }

        function success(pos) {
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;
            var urlParameter = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
            var request = new XMLHttpRequest();
            var res;
            request.open("GET", urlParameter);
            request.onreadystatechange = function readResponse() {
                if (request.readyState === 4 && request.status === 200) {
                    res = JSON.parse(request.responseText);
                    console.log(res);
                    element.innerHTML = ""+
                    "" +
                    "<div class='row infoGeneral'>" +
                    "<img id='icon' src=" + res.weather[0].icon + "alt='Weather icon' class='img-responsive col-4'>" +
                    "<div class='col-8 text-left'>" +
                    "<div id='location'>" + res.name + ', ' + res.sys.country + "</div>"+
                    "<div id='description'>" + res.weather[0].description + "</div>" +
                    "</div>" + 
                    "</div>" + 
                    "" +
                    "<div class='row infoMain'>" +
                    "<div class='col-12 text-center'>" +
                    "<div id='temperature'>" + 
                    "<span id='tempValue'>" + res.main.temp + "</span>" + 
                    "<span id='scale'>" + celsius + "</span>" + "</div>" +
                    "<button id='converter' type='button'>Fahrenheit</button>" +
                    "</div>" +
                    "</div>" +
                    "" +
                    "<div class='row infoSecondary'>" +
                    "<div class='col-4'>" +
                    "<div class='title'>Wind</div>" +
                    "<div id='wind'>"+ res.wind.speed + ' knots' + "</div>" +
                    "</div>" +
                    "<div class='col-4'>" +
                    "<div class='title'>Humidity</div>" +
                    "<div id='humidity'>" + res.main.humidity + '%' + "</div>" +
                    "</div>" +
                    "<div class='col-4'>" +
                    "<div class='title'>Pressure</div>" +
                    "<div id='pressure'>" + res.main.pressure + "</div>" +
                    "</div>" +
                    "</div>";

                    var converterButton = document.getElementById("converter");
                    if (converterButton.addEventListener)
                        converterButton.addEventListener("click", scaleConverter);
                    else if (converterButton.attachEvent)
                        converterButton.attachEvent("onclick", scaleConverter);
                }
            };
            showLoading(element);
            request.send(null);

        }
    }
        
    var contentDisplayer = function(event) {
        var content = findElement("mainContent");
        showLoading(content);
        selectContent(content);
    };

    if (document.addEventListener)
        document.addEventListener("DOMContentLoaded", contentDisplayer);
    else if (document.attachEvent)
        document.attachEvent("onload", contentDisplayer);

}());


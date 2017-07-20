const apiURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
const appID = "a4192ac11c66b463d93c577e64fda186"; //yes thats mine
let debug = null
const googKey = "AIzaSyCtTvmh8I62BBrU7qOMjAvvsfBLifI2KxI";


londonlink = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=metric&appid=a4192ac11c66b463d93c577e64fda186"

seattlelink = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&units=imperial&appid=a4192ac11c66b463d93c577e64fda186"

// userlink = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?XXXXXXXXXunits=imperial&appid=a4192ac11c66b463d93c577e64fda186"


function getSeaWx() {
  var request = new XMLHttpRequest()
  request.open("GET", seattlelink, true)
  request.onload = function () {
    let wxNameDiv = document.getElementById("displaywxname")
    let wxGenDiv = document.getElementById("displaywxgen")
    let wxTempDiv = document.getElementById("displaywxtemp")
    let wxHumDiv = document.getElementById("displaywxhum")
    let wxWindsDiv = document.getElementById("displaywxwinds")
    let response = JSON.parse(request.response)
    wxNameDiv.innerHTML = ("Station location: " + response.name)
    wxGenDiv.innerHTML = (response.weather[0].description.charAt(0).toUpperCase() + response.weather[0].description.slice(1))
    wxTempDiv.innerHTML = (response.main.temp + " degrees Fahrenheit")
    wxHumDiv.innerHTML = (response.main.humidity + "% humidity")
    wxWindsDiv.innerHTML = ("Winds " + response.wind.speed + " at " + response.wind.deg)
  }
  request.error = function (errorObject) {
    console.log("Oops.. You bwoke it.")
    console.log(errorObject)
  }
  request.send()
  }

  function getLondonWx() {
    var request = new XMLHttpRequest()
    request.open("GET", londonlink, true)
    request.onload = function () {
      let wxNameDiv = document.getElementById("displaywxname")
      let wxGenDiv = document.getElementById("displaywxgen")
      let wxTempDiv = document.getElementById("displaywxtemp")
      let wxHumDiv = document.getElementById("displaywxhum")
      let wxWindsDiv = document.getElementById("displaywxwinds")
      let response = JSON.parse(request.response)
      wxNameDiv.innerHTML = ("Station location: " + response.name)
      wxGenDiv.innerHTML = (response.weather[0].description.charAt(0).toUpperCase() + response.weather[0].description.slice(1))
      wxTempDiv.innerHTML = (response.main.temp + " degrees Celcius")
      wxHumDiv.innerHTML = (response.main.humidity + "% humidity")
      wxWindsDiv.innerHTML = ("Winds " + response.wind.speed + " at " + response.wind.deg)
    }
    request.error = function (errorObject) {
      console.log("Oops.. You bwoke it.")
      console.log(errorObject)
    }
    request.send()
    }

//userloc

function wow(){
  // get user's location from the browser
  navigator.geolocation.getCurrentPosition(geolocSuccess, geolocError);

  // callback for successfully getting location from user's browser
  function geolocSuccess(position){
    const newPos = {lat: position.coords.latitude, lng: position.coords.longitude};
    getLocation(newPos);
  }

  // callback for no success getting location from user's browser
  function geolocError(){
    console.log("Error getting user's location :(");
  }

  // API call onload callback function
  function onloadFunc(){
    const resp = JSON.parse(this.response);
    console.log(resp);

  }

  // API call onerror callback function
  function onerrorFunc(){
    // print an error message to page
     console.log("Sorry, an error occurred");
  }

  // helper method to call API and convert longitude & latitude to a human friendly address
  function getLocation(locObj){
    let mapUri = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locObj.lat},${locObj.lng}&key=AIzaSyCtTvmh8I62BBrU7qOMjAvvsfBLifI2KxI`;
    // new request object- open, define callbacks, send
    let request = new XMLHttpRequest();
    request.open("GET", mapUri, true);
    request.onload = onloadFunc;
    request.onerror = onerrorFunc;
    request.send();
  }
}

    // function getUserWx() {
    //
    //   var request = new XMLHttpRequest()
    //   request.open("GET", userlink, true)
    //   request.onload = function () {
    //     let wxNameDiv = document.getElementById("displaywxname")
    //     let wxGenDiv = document.getElementById("displaywxgen")
    //     let wxTempDiv = document.getElementById("displaywxtemp")
    //     let wxHumDiv = document.getElementById("displaywxhum")
    //     let wxWindsDiv = document.getElementById("displaywxwinds")
    //     let response = JSON.parse(request.response)
    //     wxNameDiv.innerHTML = ("Station location: " + response.name)
    //     wxGenDiv.innerHTML = (response.weather[0].description.charAt(0).toUpperCase() + response.weather[0].description.slice(1))
    //     wxTempDiv.innerHTML = (response.main.temp + " degrees Fahrenheit")
    //     wxHumDiv.innerHTML = (response.main.humidity + "% humidity")
    //     wxWindsDiv.innerHTML = ("Winds " + response.wind.speed + " at " + response.wind.deg)
    //   }
    //   request.error = function (errorObject) {
    //     console.log("Oops.. You bwoke it.")
    //     console.log(errorObject)
    //   }
    //   request.send()
    //   }

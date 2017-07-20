const apiURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
const appID = "a4192ac11c66b463d93c577e64fda186"; //yes thats mine
let debug = null

londonlink = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=metric&appid=a4192ac11c66b463d93c577e64fda186"

seattlelink = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&units=imperial&appid=a4192ac11c66b463d93c577e64fda186"


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

var x = document.getElementById("demo");
let timeoutID;
var a = 0

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML =a
    console.log("Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude)

    if (position.coords.latitude>=21.42248 & position.coords.latitude<=21.42250 & position.coords.longitude>39.82626 & position.coords.longitude<39.82668 ){
        a += 1
    }
    if (a==7){
        return;
    }
    // a +=1




}

function repeatEverySecond() {
    intervalID = setInterval(getLocation, 1000);
}

var myVideo = document.getElementById("videoTask");
var width = document.documentElement.clientWidth;

function playPause() {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

function makeBig() {
  myVideo.width = width * 0.8;
}

function makeSmall() {
  myVideo.width = width * 0.4;
}

function makeNormal() {
  myVideo.width = width * 0.6;
}
document.getElementById("lab3_map").onclick = function (e) {
  var x = e.offsetX == undefined ? e.layerX : e.offsetX;
  var y = e.offsetY == undefined ? e.layerY : e.offsetY;
  alert(x + "x" + y);
};

var x = document.getElementById("loc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;
  var img_url =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    latlon +
    "&zoom=14&size=600x400&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
  document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}

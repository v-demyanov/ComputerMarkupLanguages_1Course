function getCoordinates() {
  navigator.geolocation.getCurrentPosition(showCoordinates);
}
function showCoordinates(position) {
  let output = document.getElementById("output");
  let latitude = document.createElement("p");
  let longitude = document.createElement("p");
  latitude.innerHTML = `Широта: ${position.coords.latitude}`;
  longitude.innerHTML = `Долгота: ${position.coords.longitude}`;
  output.append(latitude);
  output.append(longitude);
}

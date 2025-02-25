document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map", {
    center: [13.855, 121.057],
    zoom: 11,
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    dragging: false,
    touchZoom: false,
    keyboard: false,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
});

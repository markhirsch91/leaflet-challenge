// "title": "USGS Magnitude 1.0+ Earthquakes, Past Hour"
var myMap = L.map("map", {
    center: [38.05, -118.24],
    zoom: 5
  });
  


var urlEarthquake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson"

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



d3.json(urlEarthquake, function(data) { 
    earthquakeFeatures(data.features);
    console.log(data.features)
});

// "title": "USGS Magnitude 1.0+ Earthquakes, Past Hour"
var myMap = L.map("map", {
    center: [38.05, -118.24],
    zoom: 5
  });
  

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
}).addTo(myMap);

var urlEarthquake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson";


// Grabbing the data for the map
d3.json(urlEarthquake, function(data) {
  function styleInfo(features) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(features.properties.mag),
      color: "#000000",
      radius: getRadius(features.properties.mag),
      weight: 0.5
    };
  }
  
  function getColor(magnitude) {
    switch (true) {
      case magnitude > 7:
        return "#FF0000";
      case magnitude > 6:
        return "#FF4500";
      case magnitude > 5:
        return "#FF8C00";
      case magnitude > 4:
        return "#FFA500";
      case magnitude > 3:
        return "#FFD700";
      case magnitude > 2:
        return "#FFFF00";
      case magnitude > 1:
        return "#ADFF2F";
      default:
        return "#00FF00";
    }
  }

  function getRadius(magnitude) {
    if (magnitude ===0) {
      return 1;
    }
    return magnitude*3;
  }
  
  //Adding the data from the GeoJson to the map that was created
  function



})
function initMap() {
  var latLng = {lat: 59.93857, lng: 30.323};
  var mapCenter = {lat: 59.9388, lng: 30.323}
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 16,
    center: mapCenter,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
  });

  var image = {
    url: "img/icon-map-pin.svg",
    size: new google.maps.Size(66, 101),
    scaledSize: new google.maps.Size(66, 101)
  };
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    icon: image,
    optimized: false
  });
}

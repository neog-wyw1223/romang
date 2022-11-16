var position = new naver.maps.LatLng(37.485571, 127.119281);

var map = new naver.maps.Map('map', {
  center: position,
  zoom: 17
});

var markerOptions = {
  position: position,
  map: map,
  icon: {
    url: '../images/icon/maker.png',
    size: new naver.maps.Size(196, 107),
    origin: new naver.maps.Point(0, 0),
    anchor: new naver.maps.Point(100, 100)
  }
};

var marker = new naver.maps.Marker(markerOptions);
var position = new naver.maps.LatLng(37.485571, 127.119281);

var map = new naver.maps.Map('map', {
  center: position,
  zoom: 17
});

var markerOptions = {
  position: position,
  map: map,
  icon: {
    content: '<img src="http://localhost:1234/images/icon/maker.png" alt="" style="width:196px; height:107px">',
  }
};

var marker = new naver.maps.Marker(markerOptions);
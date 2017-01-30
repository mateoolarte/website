function initialize() {
	var markers = [];
	var mapCanvas = $("#map_canvas2");
	var myOptions = {
		scrollwheel: true,
		navigationControl: true,
		mapTypeControl: true,
		scaleControl: false,
		draggable: true,
		zoom: 12,
		center: new google.maps.LatLng(6.235925,-75.575137),
		mapTypeId: google.maps.MapTypeId.ROADMAP
  }, myOptions;
            
        
  var map = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
  google.maps.event.addListener(map, "click", function(event) {
		var lat = event.latLng.lat();
		var lng = event.latLng.lng();
      $('#latitud').val(lat);
      $('#longitud').val(lng);
		      
		// Clean markers
		while(markers[0]) {
		markers.pop().setMap(null);
		}
			      
    // Add marker
		var location = event.latLng;
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: "images/danger5.png",
    });
     	
    markers.push(marker);
     
    // Center map
    map.setCenter(location); 
                
	});	   
}
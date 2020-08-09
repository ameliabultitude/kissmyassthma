// Contact Me Maps //
$(function () {
    function initMap() {
        
        var location = new google.maps.LatLng(51.5287352,-0.3817854);
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'assets/images/pin.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">'
            '<h3>Title</h3>'
            'div class="info-content">'
            '<p> Lorem Ipsum bla bla </p>'
        '</div>'
        '</div>';

        var infowindow = new google.maps.infowindow ({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

    }
    google.maps.event.addDomListener(window, 'load', initMap);
});


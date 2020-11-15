 // Map Function
 var map;
      function initMap() {
        map = new google.maps.Map(
            document.getElementById('map'),
            {center: new google.maps.LatLng(51.8555102, -0.4163559), zoom: 10});

        var iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

        var icons = {
          tertiary: {
            icon: 'assets/images/apartment.png'
          },
          secondary: {
            icon: iconBase + 'library_maps.png'
          },
          default: {
            icon: 'assets/images/pin.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(51.8129496, -0.379646),
            type: 'default'
          }, {
            position: new google.maps.LatLng(51.8950848, -0.471322),
            type: 'default'
          }
        ];

            // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>']
    ];

   // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
// Creating markers
        for (var i = 0; i < features.length; i++) {
          var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
            id: features[i][2]
          });
        };
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i]);
                infoWindow.open(map, marker);
            }
        })(marker, i));


        

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }



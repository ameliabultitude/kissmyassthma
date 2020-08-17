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

// Creating markers
        for (var i = 0; i < features.length; i++) {
          var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
          });
        };
      }

import mapboxgl from 'mapbox-gl';

export default {
    data() {
        return {
            coordinates: [-74.5, 40],
            location: null,
            marker: null,
            map: null
        }
    },

    methods: {
        initMapbox() {
            if (this.field.defaultCoordinates) {
                this.coordinates = [
                    this.field.defaultCoordinates.lng,
                    this.field.defaultCoordinates.lat,
                ]
            }

            mapboxgl.accessToken = 'pk.eyJ1IjoicGNuYWlscyIsImEiOiJja2VzaXV2ZGkxdW1jMnhvOWJrY3hjeXJlIn0.0ubUmrh0jtgf6RxMMQbs4A';
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: this.coordinates, // starting position [lng, lat]
                zoom: this.field.zoom, // starting zoom
            });
        },

        setLocation(location) {
            this.clearMarker();
            this.marker = new mapboxgl.Marker()
                .setLngLat([
                    location.latlng.lng,
                    location.latlng.lat,
                ])
                .addTo(this.map);
        },

        clearMarker() {
            if (this.marker) {
                this.marker.remove();
                this.marker = null;
            }
        },
    }
}

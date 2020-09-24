import mapboxgl from 'mapbox-gl';

export default {
    data() {
        return {
            coordinates: null,
            location: null,
            map: null,
            marker: null,
        }
    },

    methods: {
        initMapbox() {
            if (this.field.defaultCoordinates) {
                this.coordinates = [
                    this.field.defaultCoordinates.longitude,
                    this.field.defaultCoordinates.latitude,
                ]
            }

            mapboxgl.accessToken = this.field.accessToken;

            this.map = new mapboxgl.Map({
                container: 'mapbox',
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: this.coordinates, // starting position [lng, lat]
                zoom: this.field.zoomLevel, // starting zoom
            });

            this.marker = new mapboxgl.Marker()
                .setLngLat(this.coordinates)
                .addTo(this.map);
        },

        setLocation(location) {
            let center = [
                location.longitude,
                location.latitude,
            ];

            this.clearMarker();
            this.map.setCenter(center);
            this.marker = new mapboxgl.Marker()
                .setLngLat(center)
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

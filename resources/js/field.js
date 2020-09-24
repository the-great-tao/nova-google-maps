Nova.booting((Vue, router, store) => {
    Vue.component('index-nova-mapbox', require('./components/IndexField'));
    Vue.component('detail-nova-mapbox', require('./components/DetailField'));
    Vue.component('form-nova-mapbox', require('./components/FormField'));
});

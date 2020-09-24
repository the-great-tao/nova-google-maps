<?php

namespace Whitecube\NovaGoogleMaps;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-google-maps_mapbox', __DIR__ . '/../dist/js/mapbox-gl.js');
            Nova::style('nova-google-maps_mapbox', __DIR__ . '/../dist/css/mapbox-gl.css');

            Nova::script('nova-google-maps', __DIR__ . '/../dist/js/field.js');
            Nova::style('nova-google-maps', __DIR__ . '/../dist/css/field.css');
        });

        $this->publishes([
            __DIR__ . '/../config/nova-google-maps.php' => config_path('nova-google-maps.php'),
        ], 'nova-google-maps');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/nova-google-maps.php', 'nova-google-maps');
    }
}

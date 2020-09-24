<?php

namespace Whitecube\NovaGoogleMaps;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-mapbox-gl', __DIR__ . '/../dist/js/mapbox-gl.js');
            Nova::style('nova-mapbox-gl', __DIR__ . '/../dist/css/mapbox-gl.css');

            Nova::script('nova-mapbox', __DIR__ . '/../dist/js/field.js');
            Nova::style('nova-mapbox', __DIR__ . '/../dist/css/field.css');
        });

        $this->publishes([
            __DIR__ . '/../config/nova-mapbox.php' => config_path('nova-mapbox.php'),
        ], 'nova-mapbox');
    }

    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/nova-mapbox.php', 'nova-mapbox');
    }
}

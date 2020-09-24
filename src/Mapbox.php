<?php

namespace Whitecube\NovaGoogleMaps;

use Laravel\Nova\Fields\Field;

class Mapbox extends Field
{
    public $component = 'nova-mapbox';

    public function accessToken($accessToken)
    {
        return $this->withMeta([
            'accessToken' => $accessToken,
        ]);
    }

    public function defaultCoordinates($longitude, $latitude)
    {
        return $this->withMeta([
            'defaultCoordinates' => [
                'longitude' => $longitude,
                'latitude' => $latitude,
            ],
        ]);
    }

    public function zoomLevel($zoomLevel = 15)
    {
        return $this->withMeta([
            'zoomLevel' => $zoomLevel,
        ]);
    }
}

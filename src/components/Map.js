/// GeoSpatial.js
import React from 'react';
import DeckGL from '@deck.gl/react';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { StaticMap } from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiamxzZWFndWxsIiwiYSI6ImNrMXYwaXg5MTBhZHYzYm82MDFveXV6M2UifQ.U3dCiLUpTYb0iU7imxncmw';

// Initial viewport settings
const initialViewState = {
  longitude: -3.5339,
  latitude: 50.7184,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [50.7184, 3.5339],
    targetPosition: [50.7184, 3.5339],
  },
];

class Map extends React.Component {
  render() {
    const layers = [new HexagonLayer({ id: 'hexagon-layer', data })];

    return (
      <DeckGL
        style={{ position: 'relative' }}
        width={500}
        height={500}
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    );
  }
}

export default Map;

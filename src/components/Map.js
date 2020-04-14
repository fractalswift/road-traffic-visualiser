/// GeoSpatial.js
import React from 'react';
import DeckGL from '@deck.gl/react';

import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { StaticMap } from 'react-map-gl';

import road_data from '../data/road_data.json';

const roadData = JSON.parse(road_data);

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiamxzZWFndWxsIiwiYSI6ImNrMXYwaXg5MTBhZHYzYm82MDFveXV6M2UifQ.U3dCiLUpTYb0iU7imxncmw';

// Initial viewport settings
const initialViewState = {
  longitude: -3.5339,
  latitude: 50.7184,
  zoom: 10,
  pitch: 40.5,
  bearing: 0,
};

/**
 * Data format:
 * [
 *   {
 *     hex: '88283082b9fffff',
 *     count: 96
 *   },
 *   ...
 * ]
 */

// Data to be used by the Hexagon layer
// const data = [
//   {
//     COORDINATES: [50.7184, 3.5339],
//   },
// ];
const data = roadData['2000'].map((row) => {
  return { hex: row.h3, count: row.pedal_cycles };
});

class Map extends React.Component {
  render() {
    const layers = [
      new H3HexagonLayer({
        id: 'h3-hexagon-layer',
        data,
        pickable: true,
        wireframe: false,
        filled: true,
        extruded: true,
        elevationScale: 20,
        getHexagon: (d) => d.hex,
        getFillColor: (d) => [255, (1 - d.count / 500) * 255, 0],
        getElevation: (d) => d.count,
        // onHover: ({ object, x, y }) => {
        //   const tooltip = `${object.hex} count: ${object.count}`;
        //   /* Update tooltip
        //    http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        // */
        // },
      }),
    ];

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

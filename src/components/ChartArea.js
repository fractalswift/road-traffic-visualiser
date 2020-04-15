import React, { Component } from 'react';
import TimeSeriesViz from './TimeSeriesViz';
import YearBreakdown from './YearBreakdown';
import GeoSpatial from './GeoSpatial';
import Raw from './Raw';

const ChartArea = (props) => {
  const route = props.route;

  switch (route) {
    case 'Time Series':
      return <TimeSeriesViz />;
    case 'Year Breakdown':
      return <YearBreakdown />;
    case 'Geospatial':
      return <GeoSpatial />;
    case 'Raw':
      return <Raw dataByYear={props.dataByYear} />;
  }
};

export default ChartArea;

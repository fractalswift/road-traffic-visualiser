import React, { Component } from 'react';
import TimeSeriesViz from './TimeSeriesViz';
import YearBreakdown from './YearBreakdown';
import GeoSpatial from './GeoSpatial';
import Raw from './Raw';

import ControlBox from './ControlBox';
import Charts from './Charts';

const ChartArea = (props) => {
  const route = props.route;

  switch (route) {
    case 'Time Series':
      return <TimeSeriesViz dataByYearArray={props.dataByYearArray} />;
    case 'Year Breakdown':
      return <YearBreakdown dataByYearArray={props.dataByYearArray} />;
    case 'Geospatial':
      return <GeoSpatial />;
    case 'Raw':
      return <Raw dataByYear={props.dataByYear} />;
  }
};

export default ChartArea;

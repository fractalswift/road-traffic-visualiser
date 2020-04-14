import React, { Component } from 'react';
import TimeSeries from './TimeSeries';
import YearBreakdown from './YearBreakdown';
import GeoSpatial from './GeoSpatial';
import Raw from './Raw';

import ControlBox from './ControlBox';
import Charts from './Charts';

const ChartArea = (props) => {
  const route = props.route;

  switch (route) {
    case 'Time Series':
      return <TimeSeries dataByYearArray={props.dataByYearArray} />;
    case 'Year Breakdown':
      return <YearBreakdown dataByYearArray={props.dataByYearArray} />;
    case 'Geospatial':
      return <GeoSpatial />;
    case 'Raw':
      return <Raw />;
  }
};

export default ChartArea;

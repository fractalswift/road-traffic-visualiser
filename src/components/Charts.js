import React from 'react';
import LineChart from './LineChart';
import DonutChart from './DonutChart';

const Charts = () => {
  return (
    <div className='chartbox'>
      <LineChart />
      <DonutChart />
    </div>
  );
};

export default Charts;

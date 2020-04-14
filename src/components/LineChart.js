import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
  const chartData = { labels: props.labels, datasets: props.datasets };
  return (
    <div className='linechart'>
      <div className='chart-container'>
        <h2 style={{ textAlign: 'center' }}>{props.title}</h2>
        <Line
          data={chartData}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default LineChart;

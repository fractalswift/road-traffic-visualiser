import React, { Component } from 'react';
import ControlBox from './ControlBox';
import LineChart from './LineChart';

class TimeSeriesViz extends Component {
  state = {
    title: 'Traffic types over time',
    labels: [
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    datasets: [
      {
        label: 'Loading...',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
    vehicleSelection: ['all_motor_vehicles'],
  };

  updateVehicleSelection = (vehicles) => {
    this.setState({ vehicleSelection: vehicles });
    this.getData(vehicles);
  };

  // get all the data
  // TODO add ability to pass filters to backend
  getData = (vehiclesList) => {
    fetch('http://localhost:3001/timeseries', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        vehicles: vehiclesList,
      }),
    })
      .then((response) => response.json())
      .then((datasetsUpdate) => {
        this.setState({ datasets: datasetsUpdate });
      });
  };

  // Set defaults in here
  componentDidMount() {
    // this.getData([this.state.vehicleSelection]);
  }

  render() {
    return (
      <div className='chartarea'>
        <ControlBox
          updateVehicleSelection={this.updateVehicleSelection}
          vehicleSelection={this.state.vehicleSelection}
        />
        <LineChart
          title={this.state.title}
          labels={this.state.labels}
          datasets={this.state.datasets}
        />
      </div>
    );
  }
}

export default TimeSeriesViz;

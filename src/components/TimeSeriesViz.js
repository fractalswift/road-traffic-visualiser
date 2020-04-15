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
        label: 'Please select vehicle type(s)...',
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
        data: [0],
      },
    ],
    vehicleSelection: ['all_motor_vehicles'],
    roadTypes: ['Major', 'Minor'],
    roadCats: ['TM', 'MB', 'MCU', 'PA', 'TA'],
    directions: ['N', 'S', 'E', 'W', 'C'],
  };

  updateVehicleSelection = (vehicles) => {
    this.setState({ vehicleSelection: vehicles });
    this.getData(
      vehicles,
      this.state.roadTypes,
      this.state.roadCats,
      this.state.directions
    );
  };

  updateRoadTypesList = (roadTypes) => {
    this.setState({ roadTypes });
    this.getData(
      this.state.vehicleSelection,
      roadTypes,
      this.state.roadCats,
      this.state.directions
    );
  };

  updateRoadCatsList = (roadCats) => {
    this.setState({ roadCats });
    this.getData(
      this.state.vehicleSelection,
      this.state.roadTypes,
      roadCats,
      this.state.directions
    );
  };

  updateDirectionList = (directions) => {
    this.setState({ directions });
    this.getData(
      this.state.vehicleSelection,
      this.state.roadTypes,
      this.state.roadCats,
      directions
    );
  };

  // get all the data
  // TODO add ability to pass filters to backend
  getData = (vehiclesList, roadTypes, roadCats, directions) => {
    fetch('http://localhost:3001/timeseries', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        vehicles: vehiclesList,
        roadTypes,
        roadCats,
        directions,
      }),
    })
      .then((response) => response.json())
      .then((datasetsUpdate) => {
        this.setState({ datasets: datasetsUpdate });
      });
  };

  // Set defaults in here
  componentDidMount() {
    this.getData(
      this.state.vehicleSelection,
      this.state.roadTypes,
      this.state.roadCats,
      this.state.directions
    );
  }

  render() {
    return (
      <div className='chartarea'>
        <ControlBox
          updateVehicleSelection={this.updateVehicleSelection}
          vehicleSelection={this.state.vehicleSelection}
          updateRoadTypesList={this.updateRoadTypesList}
          roadTypesList={this.state.roadTypesList}
          updateRoadCatsList={this.updateRoadCatsList}
          roadCatsList={this.state.roadCatsList}
          updateDirectionList={this.updateDirectionList}
          directions={this.state.directions}
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

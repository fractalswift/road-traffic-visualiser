import React, { Component } from 'react';
import ControlBox from './ControlBox';
import LineChart from './LineChart';

class TimeSeries extends Component {
  state = {
    title: 'Loading...',
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
        label: 'My First dataset',
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
    vehicleSelection: [],
  };

  dataByYearArray = this.props.dataByYearArray;

  returnFilteredData = (filters = [[]], vehicles = [], yearDataArray) => {
    // TODO Apply the filters and searches
    let filteredData = yearDataArray;

    // Apply the 'show by vehicle' and push to datasets array
    // This could also set the chart title (not the dataset label)
    const datasets = [];
    // color table for codingg the chart
    const colors = {
      two_wheeled_motor_vehicles: 'orange',
      cars_and_taxis: 'yellow',
      buses_and_coaches: 'green',
      lgvs: 'red',
      hgvs_2_rigid_axle: 'powderblue',
      hgvs_3_rigid_axle: 'deepskyblue',
      hgvs_4_or_more_rigid_axle: 'cornflowerblue',
      hgvs_3_or_4_articulated_axle: 'blue',
      hgvs_5_articulated_axle: 'darkblue',
      hgvs_6_articulated_axle: 'mediumslateblue',
      all_hgvs: 'violet',
      all_motor_vehicles: 'indigo',
    };

    vehicles.forEach((vehicle) => {
      const totals = [];
      filteredData.forEach((yearColumn) => {
        const total = yearColumn.reduce((acc, current) => {
          return acc + current[vehicle];
        }, 0);
        totals.push(total);
      });

      const dataset = {
        label: vehicle,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: colors[vehicle],
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
        data: totals,
      };

      datasets.push(dataset);
    });

    // return an array of datasets, one for each vehicle type, each with 19 data points
    return datasets;
  };

  updateChartData = (newTitle, newDataSets) => {
    this.setState({ title: newTitle, datasets: newDataSets });
  };

  updateVehicleSelection = (vehicles) => {
    this.setState({ vehicleSelection: vehicles });
    console.log('from ts: ', vehicles);

    let newDataSet = this.returnFilteredData(
      [],
      vehicles,
      this.dataByYearArray
    );

    this.updateChartData('Updated title', newDataSet);
  };

  // Set defaults in here
  componentDidMount() {
    let newDataSet = this.returnFilteredData(
      [
        ['road_name', 'M5'],
        ['road_type', 'Minor'],
      ],
      this.state.vehicleSelection,
      this.dataByYearArray
    );

    this.updateChartData('New title', newDataSet);
  }

  componentDidUpdate() {
    console.log('ts updated...');
  }

  render() {
    return (
      <div className='chartarea'>
        <ControlBox updateVehicleSelection={this.updateVehicleSelection} />
        <LineChart
          title={this.state.title}
          labels={this.state.labels}
          datasets={this.state.datasets}
        />
      </div>
    );
  }
}

export default TimeSeries;

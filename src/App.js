import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ChartArea from './components/ChartArea';
import './App.css';

import roadData from './data/roaddata.json';

// Organise data into different formats for child components

const allData = roadData
  .map((page) => {
    return page.data;
  })
  .flat();

const years = new Set(
  roadData.map((page) => {
    return page.data[0].year;
  })
);

const dataByYear = {};
Array.from(years).forEach((year) => {
  dataByYear[year] = [];
});

allData.forEach((row) => {
  dataByYear[row.year].push(row);
});

const dataByYearArray = Object.values(dataByYear);

class App extends Component {
  state = {
    route: 'Time Series',
  };

  setRoute = (route) => {
    this.setState({ route });
  };

  componentDidUpdate() {
    console.log(this.state.route);
  }

  render() {
    return (
      <div className='container'>
        <Navbar route={this.state.route} setRoute={this.setRoute} />
        <ChartArea
          route={this.state.route}
          dataByYearArray={dataByYearArray}
          dataByYear={dataByYear}
        />
      </div>
    );
  }
}

export default App;

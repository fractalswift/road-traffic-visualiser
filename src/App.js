import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ChartArea from './components/ChartArea';
import './App.css';

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
        <ChartArea route={this.state.route} />
      </div>
    );
  }
}

export default App;

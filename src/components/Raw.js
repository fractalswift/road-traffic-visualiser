import React from 'react';
import ReactJson from 'react-json-view';

// TODO - this is a little heavy, may be better to give it an option for
// exploring by year to avoid fetching all data at once
// (have begun this below)

class Raw extends React.Component {
  state = { data: {} };

  getData = (year) => {
    fetch('http://localhost:3001/raw', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        year: year,
      }),
    })
      .then((response) => response.json())
      .then((yearData) => {
        this.setState({ data: yearData });
      });
  };

  componentDidMount() {
    /// call with '2000' - back end is ignoring this for now but we can
    // add functionality later
    this.getData('2000');
  }

  render() {
    return (
      <div>
        <h2>Raw data by year:</h2>
        <div className='linechart'>
          <ReactJson src={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Raw;

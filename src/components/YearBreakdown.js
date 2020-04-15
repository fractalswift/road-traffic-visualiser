import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';

class YearBreakdown extends Component {
  state = {
    activeItem: '2000',
    labels: [
      'two_wheeled_motor_vehicles',
      'cars_and_taxis',
      'buses_and_coaches',
      'lgvs',
      'hgvs_2_rigid_axle',
      'hgvs_3_rigid_axle',
      'hgvs_4_or_more_rigid_axle',
      'hgvs_3_or_4_articulated_axle',
      'hgvs_5_articulated_axle',
      'hgvs_6_articulated_axle',
      'all_hgvs',
      'all_motor_vehicles',
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'orange',
          'yellow',
          'green',
          'red',
          'powderblue',
          'deepskyblue',
          'cornflowerblue',
          'blue',
          'darkblue',
          'mediumslateblue',
          'violet',
          'indigo',
        ],
        hoverBackgroundColor: [
          'orange',
          'yellow',
          'green',
          'red',
          'powderblue',
          'deepskyblue',
          'cornflowerblue',
          'blue',
          'darkblue',
          'mediumslateblue',
          'violet',
          'indigo',
        ],
      },
    ],
  };

  // get an array of 19 arrays of vehicle totals for their year
  getData = (year) => {
    fetch('http://localhost:3001/year', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        year: year,
      }),
    })
      .then((response) => response.json())
      .then((yearData) => {
        let datasetsUpdate = this.state.datasets;

        datasetsUpdate[0].data = yearData;

        this.setState({ datasets: datasetsUpdate });
      });
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.getData(name);
  };

  // Set defaults in here
  componentDidMount() {
    this.getData('2000');
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div className='chartarea'>
        <div className='gridcontainer'>
          {' '}
          <Grid className='yeargrid'>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name='2000'
                  active={activeItem === '2000'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2001'
                  active={activeItem === '2001'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2002'
                  active={activeItem === '2002'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2003'
                  active={activeItem === '2003'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2004'
                  active={activeItem === '2004'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2005'
                  active={activeItem === '2005'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2006'
                  active={activeItem === '2006'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2007'
                  active={activeItem === '2007'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2008'
                  active={activeItem === '2008'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2009'
                  active={activeItem === '2009'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2010'
                  active={activeItem === '2010'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2011'
                  active={activeItem === '2011'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2012'
                  active={activeItem === '2012'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2014'
                  active={activeItem === '2014'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2015'
                  active={activeItem === '2015'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2016'
                  active={activeItem === '2016'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2017'
                  active={activeItem === '2017'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='2018'
                  active={activeItem === '2018'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment>
                <div style={{ width: '100%' }}>
                  <h2>Traffic proportions by year</h2>
                  <Doughnut data={this.state} />
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>

        <div></div>
      </div>
    );
  }
}

export default YearBreakdown;

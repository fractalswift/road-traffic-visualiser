import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';

import DeckGL from '@deck.gl/react';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { StaticMap } from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiamxzZWFndWxsIiwiYSI6ImNrMXYwaXg5MTBhZHYzYm82MDFveXV6M2UifQ.U3dCiLUpTYb0iU7imxncmw';

// Initial viewport settings
const initialViewState = {
  longitude: -3.5339,
  latitude: 50.7184,
  zoom: 10,
  pitch: 40.5,
  bearing: 0,
};

class MapViz extends Component {
  state = {
    activeItem: '2000',
    data: [{ hex: '8b195b565843fff', count: 18923 }],
  };

  // get an array of 19 arrays of vehicle totals for their year
  getData = (year) => {
    fetch('http://localhost:3001/yeargeo', {
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

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.getData(name);
  };

  // Set defaults in here
  componentDidMount() {
    this.getData('2000');
    console.log(this.state.data);
  }

  render() {
    const layers = [
      new H3HexagonLayer({
        id: 'h3-hexagon-layer',
        data: this.state.data,
        pickable: true,
        wireframe: false,
        filled: true,
        extruded: true,
        elevationScale: 20,
        getHexagon: (d) => d.hex,
        getFillColor: (d) => [255, (1 - d.count / 500) * 255, 0],
        getElevation: (d) => d.count,
      }),
    ];
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
                  <h2>Total vehicles</h2>
                  <DeckGL
                    style={{ position: 'relative' }}
                    width={500}
                    height={500}
                    initialViewState={initialViewState}
                    controller={true}
                    layers={layers}
                  >
                    <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
                  </DeckGL>
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

export default MapViz;

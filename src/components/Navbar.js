import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react';

export class Navbar extends Component {
  state = { activeItem: this.props.route };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.setRoute(name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div
        className='navbar'
        style={{
          border: '2px #8c99d7 solid',
          borderRadius: '5px',
          width: '96%',
        }}
      >
        <Menu>
          <Menu.Menu position='left'>
            <Menu.Item style={{ fontWeight: '1000' }}>
              {' '}
              Road Traffic Data Visualisation{' '}
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              name='Time Series'
              active={activeItem === 'Time Series'}
              onClick={this.handleItemClick}
            >
              Time Series
            </Menu.Item>
            <Menu.Item
              name='Year Breakdown'
              active={activeItem === 'Year Breakdown'}
              onClick={this.handleItemClick}
            >
              Year Breakdown
            </Menu.Item>

            <Menu.Item
              name='Geospatial'
              active={activeItem === 'Geospatial'}
              onClick={this.handleItemClick}
            >
              Geospatial
            </Menu.Item>

            <Menu.Item
              name='Raw'
              active={activeItem === 'Raw'}
              onClick={this.handleItemClick}
            >
              Raw
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;

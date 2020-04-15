import React, { Component } from 'react';
import { Checkbox, Input } from 'semantic-ui-react';

import CalculationSelector from './CalculationSelector';

class Filters extends Component {
  state = {
    vehicles: {
      two_wheeled_motor_vehicles: false,
      pedal_cycles: false,
      cars_and_taxis: false,
      buses_and_coaches: false,
      lgvs: false,
      hgvs_2_rigid_axle: false,
      hgvs_3_rigid_axle: false,
      hgvs_4_or_more_rigid_axle: false,
      hgvs_3_or_4_articulated_axle: false,
      hgvs_5_articulated_axle: false,
      hgvs_6_articulated_axle: false,
      all_hgvs: false,
      all_motor_vehicles: false,
    },
    filters: ['Major'],
  };

  updateVehicleState = (vehicle) => {
    let stateCopy = this.state;

    stateCopy.vehicles[vehicle] === true
      ? (stateCopy.vehicles[vehicle] = false)
      : (stateCopy.vehicles[vehicle] = true);

    this.setState(stateCopy);

    const vehiclesList = Object.keys(stateCopy.vehicles).filter((v) => {
      return stateCopy.vehicles[v];
    });
    // Lift the vehicles back up to through ControlBox --> TimeSeries component
    this.props.updateVehicleSelection(vehiclesList);
  };

  updateFilterState = (filter) => {
    let stateCopy = this.state;

    stateCopy.filters.includes(filter) === false
      ? stateCopy.filters.push(filter)
      : (stateCopy.filters = stateCopy.filters.filter(
          (item) => item !== filter
        ));

    this.setState(stateCopy);

    // Lift the vehicles back up to through ControlBox --> TimeSeries component
    this.props.updateFiltersList(stateCopy.filters);
  };

  render() {
    return (
      <div>
        <div className='data-selectors'>
          <div className='vehicle-checkboxes'>
            <h3>Show by vehicle:</h3>
            <Checkbox
              className='ds-checkbox'
              label='two_wheeled_motor_vehicles'
              onChange={() => {
                this.updateVehicleState('two_wheeled_motor_vehicles');
              }}
              checked={this.state.two_wheeled_motor_vehicles}
            />
            <Checkbox
              className='ds-checkbox'
              label='pedal_cycles'
              onChange={() => {
                this.updateVehicleState('pedal_cycles');
              }}
              checked={this.state.pedal_cycles}
            />

            <Checkbox
              className='ds-checkbox'
              label='buses_and_coaches'
              onChange={() => {
                this.updateVehicleState('buses_and_coaches');
              }}
              checked={this.state.buses_and_coaches}
            />
            <Checkbox
              label='cars_and_taxis'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('cars_and_taxis');
              }}
              checked={this.state.cars_and_taxis}
            />
            <Checkbox
              label='lgvs'
              onChange={() => {
                this.updateVehicleState('lgvs');
              }}
              checked={this.state.lgvs}
            />
            <Checkbox
              label='hgvs_2_rigid_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_2_rigid_axle');
              }}
              checked={this.state.hgvs_2_rigid_axle}
            />
            <Checkbox
              label='hgvs_3_rigid_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_3_rigid_axle');
              }}
              checked={this.state.hgvs_3_rigid_axle}
            />
            <Checkbox
              label='hgvs_4_or_more_rigid_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_4_or_more_rigid_axle');
              }}
              checked={this.state.hgvs_4_or_more_rigid_axle}
            />
            <Checkbox
              label='hgvs_5_articulated_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_5_articulated_axle');
              }}
              checked={this.state.hgvs_5_articulated_axle}
            />
            <Checkbox
              label='hgvs_6_articulated_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_6_articulated_axle');
              }}
              checked={this.state.hgvs_6_articulated_axle}
            />
            <Checkbox
              label='all_hgvs'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('all_hgvs');
              }}
              checked={this.state.all_hgvs}
            />
            <Checkbox
              label='all_motor_vehicles'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('all_motor_vehicles');
              }}
              checked={this.state.all_motor_vehicles}
            />
          </div>
          <div className='data-checkboxes'>
            <h3>Show by road type:</h3>
            <Checkbox
              className='ds-checkbox'
              label='Major'
              onChange={() => {
                this.updateFilterState('Major');
              }}
              checked={this.state.filters.includes('Major')}
            />
            <Checkbox
              className='ds-checkbox'
              label='Minor'
              onChange={() => {
                this.updateFilterState('Minor');
              }}
              checked={this.state.filters.includes('Minor')}
            />
          </div>
          <div className='data-checkboxes'>
            <h3>Show by road category:</h3>
            <Checkbox
              className='ds-checkbox'
              label='MB'
              onChange={() => {
                this.updateFilterState('MB');
              }}
              checked={this.state.filters.includes('MB')}
            />
            <Checkbox
              className='ds-checkbox'
              label='MCU'
              onChange={() => {
                this.updateFilterState('MCU');
              }}
              checked={this.state.filters.includes('MCU')}
            />
            <Checkbox
              className='ds-checkbox'
              label='PA'
              onChange={() => {
                this.updateFilterState('PA');
              }}
              checked={this.state.filters.includes('PA')}
            />
            <Checkbox
              className='ds-checkbox'
              label='TA'
              onChange={() => {
                this.updateFilterState('TA');
              }}
              checked={this.state.filters.includes('TA')}
            />
            <Checkbox
              className='ds-checkbox'
              label='TM'
              onChange={() => {
                this.updateFilterState('TM');
              }}
              checked={this.state.filters.includes('TM')}
            />
          </div>
          <div className='data-checkboxes'>
            <h3>Show by direction of travel:</h3>
            <Checkbox
              className='ds-checkbox'
              label='North'
              onChange={() => {
                this.updateFilterState('N');
              }}
              checked={this.state.filters.includes('N')}
            />
            <Checkbox
              className='ds-checkbox'
              label='South'
              onChange={() => {
                this.updateFilterState('S');
              }}
              checked={this.state.filters.includes('S')}
            />
            <Checkbox
              className='ds-checkbox'
              label='East'
              onChange={() => {
                this.updateFilterState('E');
              }}
              checked={this.state.filters.includes('E')}
            />
            <Checkbox
              className='ds-checkbox'
              label='West'
              onChange={() => {
                this.updateFilterState('W');
              }}
              checked={this.state.filters.includes('W')}
            />

            <Checkbox
              className='ds-checkbox'
              label='C'
              onChange={() => {
                this.updateFilterState('C');
              }}
              checked={this.state.filters.includes('C')}
            />
          </div>
          <div className='data-search'>
            <h3>Filter by road name: </h3>
            <Input placeholder='Search...' />
          </div>
          <div className='data-search'>
            <h3>Filter by start junction road name:</h3>
            <Input placeholder='Search...' />
          </div>
          <div className='data-search'>
            <h3>Filter by end junction road name:</h3>
            <Input placeholder='Search...' />
          </div>
        </div>
        <CalculationSelector />
      </div>
    );
  }
}

export default Filters;

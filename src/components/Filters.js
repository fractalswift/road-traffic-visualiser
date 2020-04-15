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
      all_motor_vehicles: true,
    },
    roadTypes: ['Major', 'Minor'],
    roadCats: ['TM', 'MB', 'MCU', 'PA', 'TA'],
    directions: ['N', 'S', 'W', 'E', 'C'],
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

  updateRoadTypesState = (roadType) => {
    let stateCopy = this.state;

    stateCopy.roadTypes.includes(roadType) === false
      ? stateCopy.roadTypes.push(roadType)
      : (stateCopy.roadTypes = stateCopy.roadTypes.filter(
          (item) => item !== roadType
        ));

    this.setState(stateCopy);

    // Lift the roadtypes back up to through ControlBox --> TimeSeries component
    this.props.updateRoadTypesList(stateCopy.roadTypes);
  };

  updateRoadCatState = (roadCat) => {
    let stateCopy = this.state;

    stateCopy.roadCats.includes(roadCat) === false
      ? stateCopy.roadCats.push(roadCat)
      : (stateCopy.roadCats = stateCopy.roadCats.filter(
          (item) => item !== roadCat
        ));

    this.setState(stateCopy);

    // Lift the roadCats back up to through ControlBox --> TimeSeries component
    this.props.updateRoadCatsList(stateCopy.roadCats);
  };

  updateDirectionState = (direction) => {
    let stateCopy = this.state;

    stateCopy.directions.includes(direction) === false
      ? stateCopy.directions.push(direction)
      : (stateCopy.directions = stateCopy.directions.filter(
          (item) => item !== direction
        ));

    this.setState(stateCopy);

    // Lift the directions back up to through ControlBox --> TimeSeries component
    this.props.updateDirectionList(stateCopy.directions);
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
              checked={this.state.vehicles.two_wheeled_motor_vehicles}
            />
            <Checkbox
              className='ds-checkbox'
              label='pedal_cycles'
              onChange={() => {
                this.updateVehicleState('pedal_cycles');
              }}
              checked={this.state.vehicles.pedal_cycles}
            />

            <Checkbox
              className='ds-checkbox'
              label='buses_and_coaches'
              onChange={() => {
                this.updateVehicleState('buses_and_coaches');
              }}
              checked={this.state.vehicles.buses_and_coaches}
            />
            <Checkbox
              label='cars_and_taxis'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('cars_and_taxis');
              }}
              checked={this.state.vehicles.cars_and_taxis}
            />
            <Checkbox
              label='lgvs'
              onChange={() => {
                this.updateVehicleState('lgvs');
              }}
              checked={this.state.vehicles.lgvs}
            />
            <Checkbox
              label='hgvs_2_rigid_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_2_rigid_axle');
              }}
              checked={this.state.vehicles.hgvs_2_rigid_axle}
            />
            <Checkbox
              label='hgvs_3_rigid_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_3_rigid_axle');
              }}
              checked={this.state.vehicles.hgvs_3_rigid_axle}
            />
            <Checkbox
              label='hgvs_4_or_more_rigid_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_4_or_more_rigid_axle');
              }}
              checked={this.state.vehicles.hgvs_4_or_more_rigid_axle}
            />
            <Checkbox
              label='hgvs_5_articulated_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_5_articulated_axle');
              }}
              checked={this.state.vehicles.hgvs_5_articulated_axle}
            />
            <Checkbox
              label='hgvs_6_articulated_axle'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('hgvs_6_articulated_axle');
              }}
              checked={this.state.vehicles.hgvs_6_articulated_axle}
            />
            <Checkbox
              label='all_hgvs'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('all_hgvs');
              }}
              checked={this.state.vehicles.all_hgvs}
            />
            <Checkbox
              label='all_motor_vehicles'
              className='ds-checkbox'
              onChange={() => {
                this.updateVehicleState('all_motor_vehicles');
              }}
              checked={this.state.vehicles.all_motor_vehicles}
            />
          </div>
          <div className='data-checkboxes'>
            <h3>Show by road type:</h3>
            <Checkbox
              className='ds-checkbox'
              label='Major'
              onChange={() => {
                this.updateRoadTypesState('Major');
              }}
              checked={this.state.roadTypes.includes('Major')}
            />
            <Checkbox
              className='ds-checkbox'
              label='Minor'
              onChange={() => {
                this.updateRoadTypesState('Minor');
              }}
              checked={this.state.roadTypes.includes('Minor')}
            />
          </div>
          <div className='data-checkboxes'>
            <h3>Show by road category:</h3>
            <Checkbox
              className='ds-checkbox'
              label='MB'
              onChange={() => {
                this.updateRoadCatState('MB');
              }}
              checked={this.state.roadCats.includes('MB')}
            />
            <Checkbox
              className='ds-checkbox'
              label='MCU'
              onChange={() => {
                this.updateRoadCatState('MCU');
              }}
              checked={this.state.roadCats.includes('MCU')}
            />
            <Checkbox
              className='ds-checkbox'
              label='PA'
              onChange={() => {
                this.updateRoadCatState('PA');
              }}
              checked={this.state.roadCats.includes('PA')}
            />
            <Checkbox
              className='ds-checkbox'
              label='TA'
              onChange={() => {
                this.updateRoadCatState('TA');
              }}
              checked={this.state.roadCats.includes('TA')}
            />
            <Checkbox
              className='ds-checkbox'
              label='TM'
              onChange={() => {
                this.updateRoadCatState('TM');
              }}
              checked={this.state.roadCats.includes('TM')}
            />
          </div>
          <div className='data-checkboxes'>
            <h3>Show by direction of travel:</h3>
            <Checkbox
              className='ds-checkbox'
              label='North'
              onChange={() => {
                this.updateDirectionState('N');
              }}
              checked={this.state.directions.includes('N')}
            />
            <Checkbox
              className='ds-checkbox'
              label='South'
              onChange={() => {
                this.updateDirectionState('S');
              }}
              checked={this.state.directions.includes('S')}
            />
            <Checkbox
              className='ds-checkbox'
              label='East'
              onChange={() => {
                this.updateDirectionState('E');
              }}
              checked={this.state.directions.includes('E')}
            />
            <Checkbox
              className='ds-checkbox'
              label='West'
              onChange={() => {
                this.updateDirectionState('W');
              }}
              checked={this.state.directions.includes('W')}
            />

            <Checkbox
              className='ds-checkbox'
              label='C'
              onChange={() => {
                this.updateDirectionState('C');
              }}
              checked={this.state.directions.includes('C')}
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

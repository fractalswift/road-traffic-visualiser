import React from 'react';
import Filters from './Filters';

const ControlBox = ({ updateVehicleSelection }) => {
  return (
    <div className='controlbox'>
      <Filters updateVehicleSelection={updateVehicleSelection} />
    </div>
  );
};

export default ControlBox;

import React from 'react';
import Filters from './Filters';

const ControlBox = ({ updateVehicleSelection, updateFiltersList }) => {
  return (
    <div className='controlbox'>
      <Filters
        updateVehicleSelection={updateVehicleSelection}
        updateFiltersList={updateFiltersList}
      />
    </div>
  );
};

export default ControlBox;

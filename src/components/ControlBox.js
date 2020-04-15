import React from 'react';
import Filters from './Filters';

const ControlBox = ({
  updateVehicleSelection,
  updateRoadTypesList,
  updateRoadCatsList,
  updateDirectionList,
  vehicleSelection,
  roadTypesList,
  roadCatsList,
  directions,
}) => {
  return (
    <div className='controlbox'>
      <Filters
        updateVehicleSelection={updateVehicleSelection}
        updateRoadTypesList={updateRoadTypesList}
        updateRoadCatsList={updateRoadCatsList}
        updateDirectionList={updateDirectionList}
        vehicleSelection={vehicleSelection}
        roadTypesList={roadTypesList}
        roadCatsList={roadCatsList}
        directions={directions}
      />
    </div>
  );
};

export default ControlBox;

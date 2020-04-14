import React from 'react';
import ReactJson from 'react-json-view';

const Raw = ({ dataByYear }) => {
  return (
    <div>
      <h2>Raw data by year:</h2>
      <div className='linechart'>
        <ReactJson src={dataByYear} />
      </div>
    </div>
  );
};

export default Raw;

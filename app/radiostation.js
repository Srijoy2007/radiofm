// components/RadioStations.js
import React from 'react';

const RadioStations = () => {
  return (
    <div className="fm-connection">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="fm-line" />
      ))}
    </div>
  );
};

export default RadioStations;

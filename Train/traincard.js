// TrainCard.js
import React from 'react';

const TrainCard = ({ train }) => {
  return (
    <div>
      <h2>{train.name}</h2>
      <p>Departure: {train.departureTime}</p>
      <p>Delay: {train.delay} minutes</p>
      {/* Display seat availability and prices for different coach types */}
      {/* Other relevant train details */}
    </div>
  );
};

export default TrainCard;

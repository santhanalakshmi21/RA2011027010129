// TrainList.js
import React, { useEffect, useState } from 'react';
import { fetchTrains } from './api';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains().then(data => {
      // Filter out trains departing in the next 30 minutes
      const filteredTrains = data.filter(train => /* filter condition */);
      // Sort the trains based on the specified criteria
      const sortedTrains = filteredTrains.sort(/* sorting logic */);
      setTrains(sortedTrains);
    });
  }, []);

  return (
    <div>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;

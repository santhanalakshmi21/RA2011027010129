// TrainDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainDetails = () => {
  const [trainData, setTrainData] = useState(null);

  useEffect(() => {
    const fetchTrainDetails = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/train/trains/2344', {
          headers: {
            Authorization: 'Bearer YOUR_AUTH_TOKEN' // Replace with your actual token
          }
        });
        setTrainData(response.data);
      } catch (error) {
        console.error('Error fetching train details:', error);
      }
    };

    fetchTrainDetails();
  }, []);

  if (!trainData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <p>Train Name: {trainData.trainName}</p>
      <p>Train Number: {trainData.trainNumber}</p>
      <p>Departure Time: {trainData.departureTime.Hours}:{trainData.departureTime.Minutes}</p>
      <p>Sleeper Seats Available: {trainData.seatsAvailable.sleeper}</p>
      <p>AC Seats Available: {trainData.seatsAvailable.AC}</p>
      <p>Sleeper Price: {trainData.price.sleeper}</p>
      <p>AC Price: {trainData.price.AC}</p>
      <p>Delayed By: {trainData.delayedBy} minutes</p>
    </div>
  );
};

export default TrainDetails;

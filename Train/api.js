// api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.johndoerailways.com';

export const fetchTrains = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/trains`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trains:', error);
    return [];
  }
};

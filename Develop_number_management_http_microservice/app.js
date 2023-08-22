const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
  try {
    const urlParams = req.query.url; // Get the URLs as an array
    if (!urlParams || !Array.isArray(urlParams)) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    const fetchPromises = urlParams.map(async (url) => {
      try {
        const response = await axios.get(url);
        return response.data.numbers; // Extract the 'numbers' array from the response
      } catch (error) {
        console.error(`Error fetching data from ${url}: ${error.message}`);
        return []; // Return an empty array if there's an error fetching data
      }
    });

    const fetchedArrays = await Promise.all(fetchPromises);
    const mergedNumbers = fetchedArrays.flat(); // Merge the arrays

    // Remove duplicates and sort the merged array
    const uniqueSortedNumbers = Array.from(new Set(mergedNumbers)).sort((a, b) => a - b);

    res.json({ numbers: uniqueSortedNumbers });
  } catch (error) {
    console.error(`Error processing request: ${error.message}`);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

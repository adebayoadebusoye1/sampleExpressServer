// create express js server
// Load the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port number
const PORT = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send(`Hello, Adebayo Adebusoye Billionaire to the World!`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

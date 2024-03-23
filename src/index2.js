const express = require('express');

// Create Express app
const app = express();
const port = 3000;

// Define a sample API endpoint
app.get('/api/sample', (req, res) => {
    res.json({ message: 'This is a sample API endpoint test test2' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

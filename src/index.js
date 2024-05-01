//api url https://api.devgains.com
const express = require('express');
const {connectDB} = require('./connect-db');


// Create Express app
const app = express();
const port = 3000;

// Define a sample API endpoint
app.get('/api/sample', (req, res) => {
    res.json({ message: 'This is a sample API endpoint test test8' });
});
//Api to test connection to database
app.get('/api/connectDb', async (req, res) => {
    const connection = await connectDB();
    res.json({ message: connection });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

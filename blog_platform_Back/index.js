require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Welcome to your Node.js server!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

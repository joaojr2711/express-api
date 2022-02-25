
require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Your Express API is up and running!');
});

app.get('/teste', (req, res) => {
    res.send(`TESTE VARS: ${process.env.MONGO_URL}`);
});

app.listen(port, () => {
    console.log(`listening at ${port}`);
});
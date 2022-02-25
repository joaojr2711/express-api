
const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Your Express API is up and running!');
});

app.get('/teste', (req, res) => {
    res.send('Your Express API is up and running!', port);
});

app.listen(port, () => {
    console.log(`listening at ${port}`);
});
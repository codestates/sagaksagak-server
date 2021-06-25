const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
    res.send('hello world!');
})

app.listen(PORT);
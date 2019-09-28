const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const port = 3001;

const articles = JSON.parse( fs.readFileSync(path.join(__dirname, 'articles.json'), 'utf8') ) || {};

app.use(cors());

app.get('/articles', (req, res) => {
    res.json(articles || []);
});

app.listen(port, () => {
    console.log(`Node Server Listening on Port ${port}`);
});
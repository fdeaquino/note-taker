const express = require('express');
const PORT = process.env.PORT || 3001;

// will initiate the server
const app = express();

// will create a route that the front-end can request data from - require the db.json file data
// TODO: is this necessary?
const db = require('./Develop/db/db.json');


app.get('/api/db', (req, res) => {
    res.json(db);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});
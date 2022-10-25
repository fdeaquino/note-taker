const express = require('express');
const PORT = process.env.PORT || 3001;

// will initiate the server
const app = express();

// will create a route that the front-end can request data from - require the db.json file data
// TODO: is this necessary?
const db = require('./Develop/db/db.json');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware - front-end access to public static resources
app.use(express.static('public'));

app.get('/api/db', (req, res) => {
    res.json(db);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
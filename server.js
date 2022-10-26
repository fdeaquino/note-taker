const express = require('express');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid'); 


// will initiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware - front-end access to public static resources
app.use(express.static('public'));


// used for initial testing of api route - similar to mod 11 proj set up
// will create a route that the front-end can request data from - require the db.json file data
// const db = require('./Develop/db/db.json');

// API Routes start

    // GET /api/notes route will read the json object/'saved notes' in the db.json file, and will then return the json object/'saved notes' array if any
app.get('/api/notes', (req, res) => {
    let notesGet = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    return res.json(notesGet);
});

    // POST /api/notes route will save user input (new notes) with a uniqid into the json object/'saved notes' array, and will return the updated notes array/json to display
app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uniqid();
    let notesPost = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    notesPost.push(newNote);
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notesPost));
    return res.json(notesPost)
});

    // TODO: DELETE (Bonus) 
    // identify the id of the note that will be deleted
    // load notes from json into the array
    // find the id of note to delete and update the db.json object without the deleted note
    // display the updated note

// API Routes end

// HTML Routes start


// HTML Routes end



// used for initial testing of api route - similar to mod 11 proj set up
// app.get('/api/db', (req, res) => {
//     res.json(db);
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
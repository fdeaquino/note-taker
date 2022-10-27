const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid'); 

// API Routes start

    // GET /api/notes route will read the json object/'saved notes' in the db.json file, and will then return the json object/'saved notes' array if any
router.get('/notes', (req, res) => {
    let notesGet = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    return res.json(notesGet);
});
    
    // POST /api/notes route will save user input (new notes) with a uniqid into the json object/'saved notes' array, and will return the updated notes array/json to display
router.post('/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uniqid();
    let notesPost = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    notesPost.push(newNote);
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notesPost));
    return res.json(notesPost);
});
    
    // TODO: DELETE (Bonus) 
    // identify the id of the note that will be deleted
    // load notes from json into the array
    // find the id of note to delete and update the db.json object without the deleted note
    // display the updated note
router.delete('/notes/:id', (req, res) => {
    // identify the id of the note that will be deleted
    let eraseThisNote = req.params.id;
    // load notes from json into the array
    let notesRead = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    console.log("notesRead", notesRead); //current notes

    // find the id of note to delete and update the db.json object without the deleted note
    // look at all the note ids but don't include the id of the one we want to delete
    let updatedNotes = notesRead.filter((notes) => notes.id !== eraseThisNote);
    
    console.log("updatedNotes", updatedNotes); //should result in an updated notes array without the note we want to delete
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(updatedNotes));
    // display the updated note
    return res.json(updatedNotes);
});


// API Routes end

module.exports = router;
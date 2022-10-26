const router = require('express').Router();
const path = require('path');

// HTML Routes start

    // GET /notes will return the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './../Develop/public/notes.html'))
});
    
    // GET /* will return the index.html file
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './../Develop/public/index.html'))
})
    
// HTML Routes end

module.exports = router;
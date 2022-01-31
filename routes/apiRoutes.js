const path = require('path');
const router = require('express').Router();
const fs = require('fs');

let notes = [];

router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data)
    });
});

router.post('/api/notes', (req, res) => {
    let newNote = req.body
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes))

        fs.readFile('./db/db.json', (err, data) => {
            if (err) {
                console.log(err)
            }
            res.send(data)
        });

});

router.delete

module.exports = router;
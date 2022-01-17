const express = require('express');
const path = require('path')
const fs = require('fs');
const app = express();
const nanoid = require('nanoid');


console.log('__dirname', __dirname);
app.use(express.json());
app.use(express.static('public'))

app.delete('/api/notes/:noteId', (req, res) => {
    // delete the note from the db file
    fs.readFile('db/db.json', function (err, data) {
        if (err) {
            return res.sendStatus(500);
        }
        const currentNote = JSON.parse(data);
        console.log('currentNote', currentNote)
        const newNoteList = currentNote.filter(note => note.id !== req.params.id);
        console.log('newNoteList', newNoteList);

        fs.writeFile('db/db.json', JSON.stringify(newNoteList), function (err) {
            if (err) {
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        });
    });

});
app.post('/api/notes', (req, res) => {
    // receive the data from client (frontend)
    // save it into the db/db.json file
    // return the saved data back to the client (frontend)

    const id = nanoid.nanoid();
    console.log('req body', req.body);

    const newNote = {
        id: id,
        title: req.body.title,
        text: req.body.text
    }

    console.log(newNote)
    fs.readFile('db/db.json', function (err, data) {
        if (err) {
            return res.sendStatus(500);
        }

        const currentNote = JSON.parse(data);
        console.log('currentNote', currentNote);
        currentNote.push(newNote);
        console.log('after adding new note', currentNote);
        fs.writeFile('db/db.json', JSON.stringify(currentNote), function (err) {
            if (err) {
                return res.sendStatus(500);
            }
            res.json(currentNote)
        });
    });
});
app.get('/api/notes', (req, res) => {
    // read the data from file db/db.json and send back to the client (frontend)
    fs.readFile('db/db.json', function (err, data) {
        if (err) {
            return res.sendStatus(500);
        }

        res.json(JSON.parse(data));
    });

});

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
})


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

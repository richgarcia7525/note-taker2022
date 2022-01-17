//Define my variables and all required packages
const express = require('express');
const path = require('path')
const fs = require('fs');
const app = express();
//Used nanoid to create a unique id
const nanoid = require('nanoid');

console.log('__dirname', __dirname);
app.use(express.json());
app.use(express.static('public'))

app.delete('/api/notes/:noteId', (req,res) => {
    //This is to delete note from the db file
    fs.readFile('db/db.json', function (err, data) {
        if (err) {
            //or if an error occurs to return status of 500 Internal Server Error
            return res.sendStatus(500);
        }
    const currentNote = JSON.parse(data);
    console.log('currentNote', currentNote)
    const newNoteList = currentNote.filter(note => note.id !== req.params.id);
    console.log('newNoteList', newNoteList);


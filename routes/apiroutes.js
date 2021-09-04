const app = require('express').Router();
const dataBase = require('../db/db.json');
const fs = require ('fs');
const uniqid = require('uniqid');


app.get('/api/notes', (req, res) => {
   res.json(dataBase)
  });


  app.post('/api/notes', (req, res) => {
      let note = req.body
      note.id = uniqid ()
      console.log(note);
dataBase.push(note)


fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(dataBase), error => {
    if(error) throw error
})
    res.end()
  })

  module.exports = app
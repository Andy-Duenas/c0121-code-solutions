/* eslint-disable no-console */
const express = require('express');
const json = require('./data.json');
const fs = require('fs');
const app = express();

app.get('/api/notes', (req, res) => {
  const jsonArray = [];
  for (const key in json.notes) {
    const obj = json.notes[key];
    jsonArray.push(obj);
  }
  console.log(req);
  res.status(200).json(jsonArray);
});

app.get('/api/notes/:id', (req, res) => {
  const objToSend = {};

  if (parseInt(req.params.id) < 0) {
    objToSend.error = 'id must be a positive integer';
    res.status(400).json(objToSend);
  } else if (!json.notes[req.params.id]) {
    objToSend.error = 'cannot find note with id ' + req.params.id;
    res.status(404).json(objToSend);
  } else {
    res.status(200).send(json.notes[req.params.id]);
  }
});

app.listen(3000, () => {
  console.log('Server is listening');
});

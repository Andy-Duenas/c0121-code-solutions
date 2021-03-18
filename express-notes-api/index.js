const express = require('express');
const jsonData = require('./data.json');
const fs = require('fs');
const app = express();

app.get('/api/notes', (req, res) => {
  const jsonArray = [];
  for (const key in jsonData.notes) {
    const obj = jsonData.notes[key];
    jsonArray.push(obj);
  }
  res.status(200).json(jsonArray);
});

app.get('/api/notes/:id', (req, res) => {
  const objToSend = {};

  if (parseInt(req.params.id) < 0) {
    objToSend.error = 'id must be a positive integer';
    res.status(400).json(objToSend);
  } else if (!jsonData.notes[req.params.id]) {
    objToSend.error = 'cannot find note with id ' + req.params.id;
    res.status(404).json(objToSend);
  } else {
    res.status(200).send(jsonData.notes[req.params.id]);
  }
});

const parsedJSON = express.json();
app.use(parsedJSON);

app.post('/api/notes', (req, res) => {
  let objToSend = {};
  if (!req.body.content) {
    objToSend.error = 'content is a required field';
    res.status(400).json(objToSend);
  } else {
    jsonData.notes[jsonData.nextId] = req.body;
    jsonData.notes[jsonData.nextId].id = jsonData.nextId;
    objToSend = jsonData.notes[jsonData.nextId];
    jsonData.nextId++;
    const dataString = JSON.stringify(jsonData, null, 2);
    fs.writeFile('./data.json', dataString, 'utf8', err => {
      if (err) {
        objToSend.error = 'an unexpected error occured.';
        res.status(500).json(objToSend);
      }
    });
    res.status(201).json(objToSend);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const objToSend = {};
  if (parseInt(req.params.id) < 0) {
    objToSend.error = 'id must be a positive integer';
    res.status(400).json(objToSend);
  } else if (!jsonData.notes[req.params.id]) {
    objToSend.error = 'cannot find note with id ' + req.params.id;
    res.status(404).json(objToSend);
  } else {
    delete jsonData.notes[req.params.id];
    const dataString = JSON.stringify(objToSend, null, 2);
    fs.writeFile('./data.json', dataString, 'utf8', err => {
      if (err) {
        objToSend.error = 'an unexpected error occured.';
        res.status(500).json(objToSend);
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  let objToSend = {};
  if (!req.body.content) {
    objToSend.error = 'content is a required field';
    res.status(400).json(objToSend);
  } else if (parseInt(req.params.id) < 0) {
    objToSend.error = 'id must be a positive integer';
    res.status(400).json(objToSend);
  } else if (!jsonData.notes[req.params.id]) {
    objToSend.error = 'cannot find note with id ' + req.body.content;
    res.status(404).json(objToSend);
  } else {
    jsonData.notes[req.params.id].content = req.body.content;
    objToSend = jsonData.notes[req.params.id];
    const dataString = JSON.stringify(jsonData, null, 2);
    fs.writeFile('./data.json', dataString, 'utf8', err => {
      if (err) {
        objToSend.error = 'an unexpected error occured.';
        res.status(500).json(objToSend);
      }
    });
    res.status(201).json(objToSend);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening');
});

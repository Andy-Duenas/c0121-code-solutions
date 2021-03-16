const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/grades', (req, res) => {
  const jsonArray = [];
  for (const key in grades) {
    const obj = grades[key];
    jsonArray.push(obj);
  }
  res.status(200).json(jsonArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const toDelete = req.params.id;
  let found = false;
  if (grades[toDelete]) {
    delete grades[toDelete];
    found = true;
  }
  if (found) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

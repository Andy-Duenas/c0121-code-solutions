const express = require('express');
const app = express();

let nextIndex = 1;
const grades = {};

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

app.use(express.json(), (req, res, next) => {
  next();
});

app.post('/api/grades', (req, res) => {
  const newGrade = {};
  newGrade.id = nextIndex;
  for (const key in req.body) {
    newGrade[key] = req.body[key];
  }
  grades[nextIndex] = newGrade;
  nextIndex++;
  res.status(201).send(newGrade);
});

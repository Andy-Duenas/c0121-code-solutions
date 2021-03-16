const express = require('express');
const app = express();

let nextIndex = 1;

const gradesArray = [];

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/grades', (req, res) => {
  res.status(200).json(gradesArray);
});

app.use(express.json(), (req, res, next) => {
  next();
});

app.post('/api/grades', (req, res) => {
  const grades = {};
  grades.id = nextIndex;
  for (const key in req.body) {
    grades[key] = req.body[key];
  }
  gradesArray.push(grades);
  nextIndex++;
  res.status(200).send('Created');
});

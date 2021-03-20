const pg = require('pg');
const express = require('express');
const app = express();
const er = require('./errors');
const inRange = require('./inRange');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"`;
  db
    .query(sql)
    .then(success => {
      res.status(200).json(success.rows);
    }).catch(error => {
      console.error(`error ${error}`);
      res.sendStatus(500);
    });
});

const parsedJSON = express.json();
app.use(parsedJSON);

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json(er.propertyMissing);
    return;
  } else if (!inRange(req.body.score)) {
    res.status(400).json(er.scoreNotBetween);
    return;
  }
  const sql = `
    insert into "grades" ("name","course","score")
    values ($1,$2,$3)
    returning *`;
  const values = [req.body.name, req.body.course, req.body.score];

  db
    .query(sql, values)
    .then(success => {
      const grade = success.rows[0];
      res.status(200).json(grade);
    }).catch(error => {
      console.error(`error ${error}`);
      res.status(500).json(er.unexpectedError);
    });
});

app.put('/api/grades/:gradeId', (req, res) => {

  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json(er.notProperId(gradeId));
    return;
  } if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json(er.propertyMissing);
    return;
  } else if (!inRange(req.body.score)) {
    res.status(400).json(er.scoreNotBetween);
    return;
  }

  const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *`;

  const params = [req.body.name, req.body.course, req.body.score, gradeId];

  db
    .query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json(er.cantFindId(gradeId));
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(er.unexpectedError);
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {

  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json(er.notProperId(gradeId));
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;

  const params = [gradeId];

  db
    .query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json(er.cantFindId(gradeId));
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(er.unexpectedError);
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is Listening');
});

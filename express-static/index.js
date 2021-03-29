const express = require('express');
const path = require('path');
const app = express();

const joinedPaths = path.join(__dirname, 'public');

const serveStatic = express.static(joinedPaths);

app.use(serveStatic);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

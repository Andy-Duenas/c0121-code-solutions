const json = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  for (const key in json.notes) {
    console.log(`${key}: ${json.notes[key]}`);
  }
}

if (process.argv[2] === 'create') {
  let newNote = '';
  for (let i = 3; i < process.argv.length; i++) {
    newNote += process.argv[i];
  }
  json.notes[json.nextId] = newNote;
  json.nextId = json.nextId + 1;
}

if (process.argv[2] === 'update') {
  let updateText = '';
  for (let i = 4; i < process.argv.length; i++) {
    updateText += process.argv[i];
  }

  json.notes[process.argv[3]] = updateText;
}

if (process.argv[2] === 'delete') {
  delete json.notes[process.argv[3]];
}

const jsonToInsert = JSON.stringify(json, null, 2);
fs.writeFile('./data.json', jsonToInsert, err => {
  if (err) throw err;
});

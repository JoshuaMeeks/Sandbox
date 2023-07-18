const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
// const data = require('./data.json');

const app = express();

app.use(express.json());
app.use(cors());

fs.readFile(path.join(__dirname, 'data.json'), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
})

process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})

// app.get('/api', (req, res) => {
//     res.json({ data });
// })

// app.post('/api', (req, res) => {
//   fs.writeFile('./data.json', JSON.stringify(req.body.data), err => {
//     if (err) {
//       console.error(err);
//     }
//   });
// })

app.listen(8080, () => console.log('Server running successfully on port 8080'))
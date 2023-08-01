const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const userBase = [];

app.post('/users/signup', async (req, res) => {
  const { username, email, password, role } = req.body;
  const securePassword = await bcrypt.hash(password, 10);
  let user = { username, email, securePassword, role };

  userBase.push(user);
  console.log(userBase);
});

app.post('/users/login', async (req, res) => {
  const { username, password } = req.body;
  userBase.filter(async user => {
    if (user.username === username) {
      const match = await bcrypt.compare(password, user.securePassword);
      if (match) {
        res.send(JSON.stringify(username))
      } else {
        console.log('Incorrect username and/or password')
      }
    } 
  })
});


app.listen('8080', () => console.log('Server running on port 8080'))
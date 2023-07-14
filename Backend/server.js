const express = require('express');
const fs = require('fs');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const userData = [
    {
        name: 'joshua meeks',
    },
]

app.get('/api', (req, res) => {
    res.send(userData);
})

app.listen(8080, () => console.log('Server running successfully on port 8080'))
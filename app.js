const express = require('express');

const app = express();

const path = require('path');

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({alldata: `Your username is`} || 'wow');
})

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log('Server running at ', port);
})
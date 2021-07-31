const express = require('express');

const app = express();

const path = require('path');

const port = process.env.PORT || 3000;



app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({alldata: `Your username is`} || 'wow');
})

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log('Server running at ', port);
})
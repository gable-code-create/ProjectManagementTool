const AWS = require('aws-sdk');
require('dotenv').config(); 

const express = require('express');

const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const port = process.env.PORT || 3000;




AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  });
  
  //needs to be after config
  const dynamoClient = new AWS.DynamoDB.DocumentClient();
  const TABLE_NAME = 'type';
  

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

var params = {
    TableName: TABLE_NAME,
    Key:{ 
        kind: 'fire'
    }
  }
  
  const getData = async () => {
    const params = {
      TableName: TABLE_NAME,
      Key:{"kind": "fire"}
    }
  
    const userT = await dynamoClient.scan(params).promise();
    return userT;
  }


app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log('Server running at ', port);
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({alldata: `Your username is`} || 'wow');
})

app.get('/this', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
     
 dynamoClient.get(params, function (err, data) {
  

    res.setHeader('Content-Type', 'application/json');
 
        console.log(data);   
        console.log(data.Item.name)
      res.send({alldata: `this is the data ${data.Item.name}`});
      
    })
    
})

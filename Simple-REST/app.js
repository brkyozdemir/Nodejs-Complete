const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); //x-www-form-urlencoded
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', feedRoutes);

mongoose.connect('mongodb+srv://botuz:GcT38Aj5ngeZH559@cluster0.wxfvt.mongodb.net/nodejs-complete?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },)
  .then(results => {
    app.listen(8080);
    // console.log(results);
  })
  .catch(err => console.log(err));

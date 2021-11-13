'use strict';

const server = require('./src/server.js');
// server.start(3333)

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://thornrae:Javascript@cluster0.yx23z.mongodb.net/todoapp?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3333

const options = { useNewUrlParser: true, useUnifiedTopology: true};

mongoose
  .connect(MONGODB_URI, options)
  .then(() => {
    server.start(PORT);
  })
  .catch(err => {
    console.log(err);
  })

// mongoose.connect(MONGODB_URI, options)
//   .then(server.start(PORT))
 


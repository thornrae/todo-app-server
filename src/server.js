'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js')
const tasksRoute = require('./routes/tasks.js');

// const mongoose = require('mongoose');

// const PORT = process.env.PORT || 3333

app.use(express.json());
app.use(logger);
app.use(tasksRoute);
app.use(cors());

app.use('*', notFound);

app.use(errors);

module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    });
  }
}
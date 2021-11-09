'use strict';

const { modelName } = require("../models/tasks");

function handleError(err, req, res, next) {
  res.status(500).json( {status: 500, msg:'this broke broke :('})
}

module.exports = handleError
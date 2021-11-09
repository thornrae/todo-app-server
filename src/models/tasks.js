'use strict';

const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
  complete: {type: Boolean, required: true},
  difficulty: {type: Number, required: true},
  text: {type: String, required: true},
  assignee: {type: String, required: true}
})

const tasksModel = mongoose.model('tasks', tasksSchema);

module.exports = tasksModel;
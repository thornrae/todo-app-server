'use strict';

const express = require('express');

let MongoWrapper = require('../models/data-collection-class.js');
let tasksSchema = require('../models/tasks.js');

const tasks = new MongoWrapper(tasksSchema);

const tasksRouter = express.Router();

tasksRouter.get('/tasks', getAllTasks);
tasksRouter.get('/tasks/:id', getOneTask);
tasksRouter.post('/tasks', createTask);
tasksRouter.put('/tasks/:id', updateTask);
tasksRouter.delete('/tasks/:id', deleteTask);


async function getAllTasks (req,res) {
  let all = await tasks.get();
  res.status(200).send(all);
}

async function getOneTask (req, res) {
  let id = req.params.id;
  let item = await tasks.get(id);
  res.status(200).send(item);
}

async function createTask (req, res) {
  let obj = req.body;
  console.log(obj);
  let newTask = await tasks.create(obj);
  console.log(newTask);
  res.status(200).send(newTask);
}

async function updateTask (req, res) {
  let id = req.params.id;
  let update = req.body;
  let updatedChange = await tasks.update(id, update);
  res.status(200).send(updatedChange);
}

async function deleteTask (req, res){
  let id = req.params.id;
  console.log(id);
  let done = await tasks.delete(id);
  res.status(200).send(done);
}


module.exports = tasksRouter;


//adding dumb comment

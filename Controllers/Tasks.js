const express = require('express');
const db = require('../Schema/schema');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const getAllTasks = asyncWrapper(async (req,res) => {
        const tasks = await db.find({});
        res.status(200).json({tasks});
})

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await db.findOne({ _id: taskID })
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
  })
  const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await db.findOneAndDelete({ _id: taskID })
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
  })
  const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
  
    const task = await db.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
  })

const createTask = asyncWrapper(async(req,res) => {
        const tasks = await db.create(req.body);
        res.status(200).json({tasks});
})

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
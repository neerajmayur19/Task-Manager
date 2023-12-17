const express = require('express');
const router = express.Router();
const {getAllTasks, getTask,createTask,updateTask,deleteTask} = require('../Controllers/Tasks');


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
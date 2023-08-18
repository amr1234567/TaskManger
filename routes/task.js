const express = require('express')
const route = express.Router()

const {GetAllTasks,CreateTask,GetSingleTask,EditTask,DeleteTask} =
require('../controllers/tasks')

route.route('/').get(GetAllTasks).post(CreateTask)
route.route('/:id').get(GetSingleTask).patch(EditTask).delete(DeleteTask)
module.exports=route
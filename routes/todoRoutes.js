
const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todoController')
const Todo = require('../models/Todo')

router.post('/add-todo', todoController.createTodo) 
router.get('/all-todo', todoController.getTodos)
router.get('/todo/:id', todoController.singleTodo)
router.put('/update/:id', todoController.updateTodo)
router.delete('/delete/:id', todoController.deleteTodo)

module.exports = router
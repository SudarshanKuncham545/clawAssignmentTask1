
const Todo = require('../models/Todo')

const createTodo = async(req, res) => {
    try{
        const { id, username, password } = req.body 

        const todo = new Todo({
            id,
            username,
            password
        })
        await todo.save()
        res.status(201).json(todo)
    }catch(error){
        console.log("there is an error:", error)
        res.status(500).json({ message: 'Server error'})
    }
}

const getTodos = async(req, res)=>{
    try{
        const todos = await Todo.find()
        res.status(200).json(todos)
    }catch(error){
        console.log("There is an error:", error)
        res.status(500).json({ message: "server error" })
    }
}

const singleTodo = async(req, res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        if(!todo){
            return res.status(404).json({message: "Todo not found"})
        }
        res.status(200).json(todo)
    }
    catch(error){
        console.error("there is an error:", error)
        res.status(500).json({message:"server error"})
    }
}

const updateTodo = async(req,res)=>{
    try{
        const { id, username, password} = req.body 

        const myTodo = await Todo.findByIdAndUpdate(req.params.id, {
            id, username, password
        })
        if(!myTodo){
            return res.status(404).json({message: "employee not found"})
        }
        res.status(200).json(myTodo)
    }
    catch(error){
        console.error('there is an error:', error)
        res.status(500).json({message: "server error"})
    }
}

const deleteTodo = async(req,res)=>{
    try{
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(error){
        console.error("there is an error:", error)
        res.status(500).json({ message: "server error"})
    }
}


module.exports = { createTodo, getTodos, singleTodo, updateTodo, deleteTodo}

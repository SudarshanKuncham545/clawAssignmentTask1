const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Todo', todoSchema)
const express = require('express')
const dotEnv = require('dotenv') 
const mongoose = require('mongoose')
const bodyParser = require('body-parser') 
const todoRoutes = require('./routes/todoRoutes')
const cors = require('cors')

const app = express() 
const PORT = process.env.PORT || 5014

dotEnv.config()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI) 
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use('/todos', todoRoutes)


app.listen(PORT, ()=>{
    console.log(`server started and running at ${PORT}`)
})
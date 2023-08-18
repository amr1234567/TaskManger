
const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not_found')


app.use(express.static('./public'))
app.use(express.json())
app.use(notFound)

app.use ('/api/v1/tasks',tasks)


const start = async()=>{
    try {
        
        await connectDB(process.env.mongo)
        
        app.listen((3000),console.log('server is listening to port 3000.....'))
    } catch (error) {
        console.log(error)
    }
}
start()
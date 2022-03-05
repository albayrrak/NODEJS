const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const cors = require('cors')

//Middleware
app.use(express.json())
app.use(cors())

app.use('/api/v1/tasks', tasks)


const port = process.env.PORT

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log('Backend is running'))
    } catch (error) {
        console.log(error);
    }
}

start()

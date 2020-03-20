const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 8080
const app = express()
require('dotenv').config()

app.use(morgan("dev"))
app.use(express.json())

mongoose.set('useCreateIndex', true);
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://zmcentire:MomentoM0r%212020@cluster0-gnby9.mongodb.net/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("MongoDB is connected")
    })
    .catch(err => {
        console.log(err)
    })
app.use('/api/event', require('./routes/event'))

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})
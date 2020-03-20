const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Number
    }
})

module.exports = mongoose.model('event', eventSchema)
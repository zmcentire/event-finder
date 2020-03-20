const express = require('express')
const event = require('../models/event')
const eventRouter = express.Router()

eventRouter.route("/")
    .get((req, res) => {
        event.find((err, event) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(book)
        })
    })
    .post((req, res) => {
        const newEvent = new event(req.body)

        newEvent.save((err, event) => {
            if(err){return res.status(500).send(err)}
            return res.status(201).send(book)
        })
    })
eventRouter.route("/:_id")
    .get((req, res) => {
        event.findById((err, event) => {
            if(err) return res.status(500).send(err)
            if(!book) return res.status(404).send(err)
            return res.status(200).send(book)
        })
    })
    .put((req, res) => {
        event.findOneAndUpdate(
            { id: req.params._id},
            req.body,
            {new: true},
            (err, event) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(event)
            }
        )
    })
    .delete((req, res) => {
        event.findOneAndRemove(
            {_id: req.params.id},
           (err, event) => {
               if(err) return res.status(500).send(err)
               return res.status(200).send(event)
           } 
        )
    })
module.exports = eventRouter
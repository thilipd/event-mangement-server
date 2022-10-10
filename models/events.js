const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please enter Title!"],
        trim: true
    },
    description: {
        type: String

    },
    eventStart: {
        type: String,
        required: true
    },
    eventEnd: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const eventModel = mongoose.model('events', eventSchema);

module.exports = eventModel;
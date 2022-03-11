const { Schema, model } = require('mongoose');

const timeSchema = new Schema({
    clockIn: {
        type: String,
        required: true,
    },
    clockOut: {
        type: String,
    }
});

const Time = model('Time', timeSchema);

module.exports = Time;
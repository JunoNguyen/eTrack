const { Schema, model } = require('mongoose');

const punchSchema = new Schema({
    time: {
        type: Date,
        required: true,
    },
    action: {
        type: String,
        required: true
    }
});


module.exports = punchSchema;
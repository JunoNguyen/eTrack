const { Schema } = require('mongoose');

const notesSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
});

module.exports = notesSchema;

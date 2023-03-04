const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const notesSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
});

module.exports = notesSchema;
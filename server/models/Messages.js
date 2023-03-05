// This model needs to have a connection to who it was posted by, who the message is for, and the message content
const { Schema } = require('mongoose');

const messagesSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  senderName: {
    type: String,
    required: true,
  },

});

module.exports = messagesSchema;

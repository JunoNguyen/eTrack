const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const notesSchema = require('./Notes');
const messagesSchema = require('./Messages');
const punchSchema = require('./Punch');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  timesheet: [punchSchema],
  savedNotes: [notesSchema],
  messages: [messagesSchema],
},
  {
    toJSON: {
      virtuals: true,
    },
  });

// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

profileSchema.virtual('noteCount').get(function () {
  return this.savedNotes.length;
});

const Employee = model('Employee', profileSchema);

module.exports = Employee;

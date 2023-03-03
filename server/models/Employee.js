const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const notesSchema = require('./Notes');

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
  time: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Time'
    }
  ],
  savedNotes: [notesSchema],
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

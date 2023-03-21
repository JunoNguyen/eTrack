// SCHEDULE MODEL OR MORE LIKELY SCHEMA

// Use schema that manager can assign to an employee
// indefinite schedule, would like to eventually add a monthly schedule
// const validShift = require('../utils/validation');
const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
  monday: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/.test(v);
      },
      message: props => `${props.value} is not a valid shift!`
    },
    match: [/\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/, 'Please pass a valid shift']
  },
  tuesday: {
    type: String,
    required: true,
    match: [/\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/, 'Please pass a valid shift']
  },
  wednesday: {
    type: String,
    required: true,
    match: [/\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/, 'Please pass a valid shift']
  },
  thursday: {
    type: String,
    required: true,
    match: [/\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/, 'Please pass a valid shift']
  },
  friday: {
    type: String,
    required: true,
    match: [/\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/, 'Please pass a valid shift']
  },
  saturday: {
    type: String,
    required: true,
    match: [/\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/, 'Please pass a valid shift']
  },
  sunday: {
    type: String,
    required: true,
    match: [/\b\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M\b/, 'Please pass a valid shift']
  },

},
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;

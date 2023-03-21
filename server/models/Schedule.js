// SCHEDULE MODEL OR MORE LIKELY SCHEMA

// Use schema that manager can assign to an employee
// indefinite schedule, would like to eventually add a monthly schedule
// const validShift = require('../utils/validation');
const { Schema } = require('mongoose');

const scheduleSchema = new Schema({
  monday: {
    type: String,
    required: true,
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

});

module.exports = scheduleSchema;

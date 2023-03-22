const { Schema, model, Types } = require("mongoose");

const shiftSchema = new Schema({
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  assignedEmployee: {
    type: Types.ObjectId,
    ref: 'Employee',
    required: false,
  },
  createdBy: {
    type: Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  // updatedAt: {
  //   type: Date,
  //   rqeuired: false,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Shift = model("Shift", shiftSchema);

module.exports = Shift;

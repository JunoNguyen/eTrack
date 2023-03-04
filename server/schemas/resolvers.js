const { Employee, Time } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    employees: async () => {
      return Employee.find().populate('Time');
    },
    time: async () => {
      return Time.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await Employee.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addEmployee: async (parent, { name, email, password }) => {
      const employee = await Employee.create({ name, email, password });
      const token = signToken(employee);

      return { token, employee };
    },
    clockIn: async (parent, { clockIn }) => {
      return await Time.create({ clockIn })
    },
    clockOut: async (parent, { timeId, clockOut }) => {
      return Time.findOneAndUpdate(
        { _id: timeId },
        { clockOut: clockOut }
      );
    },
    addTime: async (parent, { employeeId, timeId }) => {

      return await Employee.findOneAndUpdate(
        { _id: employeeId },
        { $addToSet: { time: timeId } }
      );
    },
    login: async (parent, { email, password }) => {
      const employee = await Employee.findOne({ email });

      if (!employee) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await employee.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(employee);
      return { token, employee };
    },
    saveNote: async (parent, { noteData }, context) => {
      if (context.user) {
        console.log(context.user)
        const updatedEmployee = await Employee.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedNotes: noteData } },
          { new: true }
        );

        return updatedEmployee;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeNote: async (parent, { noteId }, context) => {
      if (context.user) {
        const updatedEmployee = await Employee.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedNotes: { _id: noteId } } },
          { new: true }
        );

        return updatedEmployee;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  }
}
module.exports = resolvers;
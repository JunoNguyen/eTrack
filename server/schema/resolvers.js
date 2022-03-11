const { Employee, Time } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
      employees: async () => {
        return Employee.find().populate('Time');
      },
      time: async () => {
        return Time.find();
      }
    },
  
    Mutation: {
      addEmployee: async (parent, { name, email, password }) => {
        const employee = await Employee.create({ name, email, password });
        const token = signToken(employee);
  
        return { token, employee};
      },
      clockIn: async (parent, { clockIn }) => {
        return Time.create({ clockIn })
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
          { $addToSet: { time: timeId }}
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
    }
  }
  module.exports = resolvers;
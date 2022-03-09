const { Employee } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
      employees: async () => {
        return Employee.find();
      },
    },
  
    Mutation: {
      addEmployee: async (parent, { name, email, password }) => {
        const employee = await Employee.create({ name, email, password });
        const token = signToken(employee);
  
        return { token, employee};
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
const { Employee, Schedule } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const resolvers = {
  Date: dateScalar,
  Query: {
    employees: async () => {
      // return Employee.find().populate('Time');
      return Employee.find().select('-__v')
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await Employee.findOne({ _id: context.user._id }).select('-__v -password').populate('Schedule');
        console.log(userData);
        const scheduleData = await Schedule.findOne({_id: userData.scheduleId})
        console.log(scheduleData);

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    schedules: async () => {
      return Schedule.find()
    }

  },

  Mutation: {
    addEmployee: async (parent, { name, email, password }) => {
      const employee = await Employee.create({ name, email, password });
      const token = signToken(employee);

      return { token, employee };
    },
    punch: async (parent, { action }, context) => {
      console.log(action);
      if (context.user) {
        const { timesheet } = await Employee.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { timesheet: { time: Date.now(), action: action } } },
          { new: true }
        );
        return timesheet[timesheet.length - 1];
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addShift: async (parent, { shifts }, context) => {
      console.log(shifts)
      if (context.user) {
        const updatedEmployee = await Schedule.create(
          shifts
        );
        return updatedEmployee;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    assignShift: async (parent, { shiftId }, context) => {
      if (context.user) {
        const updatedEmployee = await Employee.findByIdAndUpdate(
          { _id: context.user._id },
          { $set: { scheduleId: shiftId } },
          { new: true }
        );
        return updatedEmployee;
      }
      throw new AuthenticationError('You need to be logged in!');
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
    addMessage: async (parent, { messageData }, context) => {
      console.log('backend hit')
      if (context.user) {
        const updatedEmployee = await Employee.findByIdAndUpdate(
          { _id: messageData.receiverId },
          {
            $push: {
              messages: {
                message: messageData.message,
                senderId: context.user._id,
                senderName: context.user.name
              }
            }
          },
          { new: true }
        );

        return updatedEmployee;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    employee: async (parent, { id }, context) => {
      if (id) {
        const userData = await Employee.findOne({ _id: id })

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  }
}
module.exports = resolvers;
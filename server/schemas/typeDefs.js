const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  type Employee {
    _id: ID!
    name: String!
    email: String
    timesheet: [Time]
    savedNotes: [Note]!
    messages: [Message]!
    scheduleId: ID
  }

  type Time {
    _id: ID
    time: Date
    action: String    
  }

  type Note {
    _id: ID
    note: String!
  }

  type Message {
    _id: ID
    message: String!
    senderId: ID!
    senderName: String!
  }

  type Schedule {
    _id: ID
    monday: String
    tuesday: String
    wednesday: String
    thursday: String
    friday: String
    saturday: String
    sunday: String
  }

  type Auth {
    token: ID!
    employee: Employee
  }

  input NoteInput {
    note: String!
  }

  input ScheduleInput {
    monday: String
    tuesday: String
    wednesday: String
    thursday: String
    friday: String
    saturday: String
    sunday: String
  }

  enum PunchType {
    IN
    OUT
  }

  input MessageInput {
    message: String!
    receiverId: ID!
  }

  type Query {
    employees: [Employee]!
    time: [Time]!
    me: Employee!
  }

  type Mutation {
    addEmployee(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    punch(action: PunchType!): Time
    addShift(shifts: ScheduleInput!): Schedule
    assignShift(shiftId: ID!): Employee
    saveNote(noteData: NoteInput!): Employee
    removeNote(noteId: ID!): Employee
    addMessage(messageData: MessageInput!): Employee
    employee(id: ID!): Employee
  }
`;

module.exports = typeDefs;
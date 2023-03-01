const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID!
    name: String!
    email: String
    time: [Time]
  }

  type Time {
    _id: ID
    clockIn: String
    clockOut: String    
  }

  type Auth {
    token: ID!
    employee: Employee
  }

  type Query {
    employees: [Employee]!
    time: [Time]!
    me: Employee
  }

  type Mutation {
    addEmployee(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    clockIn(clockIn: String!): Time
    clockOut(timeId: ID!, clockOut: String!): Time
    addTime(employeeId: ID!, timeId: ID!): Employee
  }
`;

module.exports = typeDefs;
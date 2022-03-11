const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID
    name: String
    email: String
    password: String
    time: [Time]!
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
  }

  type Mutation {
    addEmployee(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    songString: [SongString]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    employees: [Employee]!
  }

  type Mutation {
    addEmployee(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
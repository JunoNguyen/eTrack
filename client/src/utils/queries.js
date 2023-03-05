import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      email
      savedNotes {
        _id
        note
      }
      messages {
        _id
        message
        receiverId
      }
    }
  }
`;

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      _id
      name
      email
      savedNotes {
        _id
        note
      }
      messages {
        _id
        message
        receiverId
      }
    }
  }
`;

export const QUERY_EMPLOYEES = gql`
  {
    employees {
      _id
      name
    }
  }
`;

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

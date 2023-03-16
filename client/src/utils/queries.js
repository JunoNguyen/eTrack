import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      email
      timesheet {
        _id
        time
        action
      }
      savedNotes {
        _id
        note
      }
      messages {
        _id
        message
        senderId
        senderName
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

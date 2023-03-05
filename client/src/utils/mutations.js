import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($name: String!, $email: String!, $password: String!) {
    addEmployee(name: $name, email: $email, password: $password) {
      token
      employee {
        _id
        name
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      employee {
        _id
        name
      }
    }
  }
`;

export const SAVE_NOTE = gql`
  mutation saveNote($noteData: NoteInput!) {
    saveNote(noteData: $noteData) {
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

export const REMOVE_NOTE = gql`
  mutation removeNote($noteId: ID!) {
    removeNote(noteId: $noteId) {
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

export const ADD_MESSAGE = gql`
  mutation addMessage($messageData: MessageInput!) {
    addMessage(messageData: $messageData) {
      _id
      name
      email
      savedNotes {
        _id
        note
      }
      messages {
        message
        senderId
        senderName
      }
    }
  }
`;

// export const FIND_EMPLOYEE = gql`
//   mutation employee($id: ID!) {
//     employee(id: $id) {
//       _id
//       name
//     }
//   }
// `;
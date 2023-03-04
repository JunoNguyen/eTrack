import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { SAVE_NOTE, REMOVE_NOTE } from '../../utils/mutations';
import Auth from '../../utils/auth';

//Eventually modularize this better and utilize props to import the required functions

const TodoList = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">To do list</h4>
                <TodoListComponent />
            </div>
        </div>
    )
};

const TodoListComponent = () => {

    const [noteValue, setNoteValue] = useState('');

    const { loading, data } = useQuery(QUERY_ME);
    const [saveNote, { error }] = useMutation(SAVE_NOTE);

    const userData = data?.me || {};
    const notesData = userData?.savedNotes || [];

    const handleSaveNote = async (event) => {
        event.preventDefault();
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(noteValue);
        if (noteValue.length === 0) {
            return false;
        };

        if (!token) {
            return false;
        };

        try {
            const { data } = await saveNote({
                variables: { noteData: { note: noteValue } },
            });
            console.log(data);
        } catch (err) {
            console.error(err);
            console.log(error);
        };
    };

    const handleChange = (event) => {
        event.preventDefault();

        setNoteValue(event.target.value)
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    };

    return (
        <>
            <form className="add-items d-flex my-2">
                <input
                    type="text"
                    className="form-control h-auto"
                    placeholder="What do you need to do today?"
                    onChange={handleChange}
                    required />
                <button type="submit" className="btn btn-primary" onClick={handleSaveNote}>Add</button>
            </form>
            <h5 className="text-muted">Click the checkbox when your task is completed.</h5>
            <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list list-group">
                    {notesData.map((todo) => {
                        return <ListItem
                            key={todo._id}
                            id={todo._id}
                        >{todo.note}</ListItem>
                    })}
                </ul>
            </div>
        </>
    )
};

const ListItem = (props) => {
    const [removeNote, { error }] = useMutation(REMOVE_NOTE);

    const handleRemoveNote = async (id) => {

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeNote({
                variables: { noteId: id },
            });
            console.log(data);
        } catch (err) {
            console.error(err);
            console.log(error);
        }
    };

    return (
        <li className="list-group-item">
            <div className="form-check">
                <label htmlFor="" className="form-check-label">
                    <input className="checkbox" type="checkbox" id={props.id}
                        onClick={(event) => {
                            handleRemoveNote(event.target.id)
                        }
                        }
                    /> {props.children} <i className="input-helper"></i>
                </label>
            </div>
        </li>
    )
};

export default TodoList;
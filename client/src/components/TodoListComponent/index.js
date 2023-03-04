import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { SAVE_NOTE, REMOVE_NOTE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const TodoList = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">To do list</h4>
                <TodoListComponent />
            </div>
        </div>
    )
}

const TodoListComponent = (props) => {

    const [noteValue, setNoteValue] = useState('');

    const { loading, data } = useQuery(QUERY_ME);
    const [saveNote, { error }] = useMutation(SAVE_NOTE);

    const userData = data?.me || {};
    // const notesData = props.userData?.savedNotes || [];
    const notesData = userData?.savedNotes || [];

    const handleSaveNote = async (event) => {
        event.preventDefault();
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(noteValue);
        if (noteValue.length === 0) {
            return false;
        }

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveNote({
                variables: { noteData: { note: noteValue } },
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        event.preventDefault();

        setNoteValue(event.target.value)
    };

    // const handleChecked = (event) => {
    //     console.log(event.target);
    //     console.log('checked');
    // }

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
            {/* <form className="add-items d-flex my-2" onSubmit={this.addTodo}> */}
            <form className="add-items d-flex my-2">
                <input
                    type="text"
                    className="form-control h-auto"
                    placeholder="What do you need to do today?"
                    // value={this.state.inputValue}
                    onChange={handleChange}
                    required />
                <button type="submit" className="btn btn-primary" onClick={handleSaveNote}>Add</button>
            </form>
            <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list list-group">
                    {notesData.map((todo) => {
                        return <ListItem
                            // isCompleted={todo.isCompleted}
                            // changed={(event) => statusChangedHandler(event, index)}
                            key={todo._id}
                            id={todo._id}
                        // handleChecked={handleChecked}
                        // remove={() => this.removeTodo(index)}
                        >{todo.note}</ListItem>
                    })}
                </ul>
            </div>
        </>
    )
}
// }

const ListItem = (props) => {
    const [saveNote, { error }] = useMutation(REMOVE_NOTE);

    const handleRemoveNote = async (id) => {
        // event.preventDefault();
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        // console.log(noteValue);
        // if (noteValue.length === 0) {
        //     return false;
        // }

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveNote({
                variables: { noteId: id },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <li className="list-group-item">
            <div className="form-check">
                <label htmlFor="" className="form-check-label">
                    <input className="checkbox" type="checkbox" id={props.id}
                        // onChecked={() => console.log('checked')}
                        onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            handleRemoveNote(event.target.id)
                        }
                        }
                    /> {props.children} <i className="input-helper"></i>
                </label>
            </div>
            {/* <i className="remove mdi mdi-close-box" onClick={props.remove}></i> */}
        </li>
    )
};

export default TodoList;
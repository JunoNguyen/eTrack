import React from 'react'

const TodoList = (props) => {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">To do list</h4>
                <TodoListComponent handleChange={props.handleChange} handleSaveNote={props.handleSaveNote} notesData={props.notesData} handleRemoveNote={props.handleRemoveNote}/>
            </div>
        </div>
    )
};

const TodoListComponent = (props) => {

    return (
        <>
            <form className="add-items d-flex my-2">
                <input
                    type="text"
                    className="form-control h-auto"
                    placeholder="What do you need to do today?"
                    onBlur={props.handleChange}
                    required />
                <button type="submit" className="btn btn-primary" onClick={props.handleSaveNote}>Add</button>
            </form>
            <h5 className="text-muted">Click the checkbox when your task is completed.</h5>
            <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list list-group">
                    {props.notesData.map((todo) => {
                        return <ListItem
                            key={todo._id}
                            id={todo._id}
                            handleRemoveNote={props.handleRemoveNote}
                        >{todo.note}</ListItem>
                    })}
                </ul>
            </div>
        </>
    )
};

const ListItem = (props) => {

    return (
        <li className="list-group-item">
            <div className="form-check">
                <label htmlFor="" className="form-check-label">
                    <input className="checkbox" type="checkbox" id={props.id}
                        onClick={(event) => {
                            props.handleRemoveNote(event.target.id)
                        }
                        }
                    /> {props.children} <i className="input-helper"></i>
                </label>
            </div>
        </li>
    )
};

export default TodoList;
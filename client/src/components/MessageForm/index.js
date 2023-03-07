import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EMPLOYEES } from '../../utils/queries';
import { ADD_MESSAGE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const MessageForm = () => {

    const countStyle = {
        float: "right",
        padding: "0.1rem 0 0 0",
        fontSize: "0.875rem",
    };

    // const test = {
    //     aspectRatio : `1 / ${1/4}`
    // }

    const { loading, data } = useQuery(QUERY_EMPLOYEES);
    const [addMessage, { error }] = useMutation(ADD_MESSAGE);
    const employeeData = data?.employees || [];

    // let firstSelection;

    // if (employeeData !== []) {
    //     firstSelection = employeeData[0]._id;
    // } else {
    //     firstSelection = '';
    // }

    const [selectedEmployee, setSelectedEmployee] = useState(``);
    const [message, setMessage] = useState('');
    const [messageLength, setMessageLength] = useState(0);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        console.log(e.target);

        name === 'selectedEmployee' ? setSelectedEmployee(value) : setMessage(value);

        // This is delayed by one due to deleting text counting towards message.length
        if (name === 'message') {
            setMessageLength(message.length);
        }
    };

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        console.log('hit')
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
        console.log(message);
        console.log(selectedEmployee);

        try {
            const { data } = await addMessage({
                variables: {
                    messageData:
                    {
                        message: message,
                        receiverId: selectedEmployee
                    }
                },
            });
            console.log(data);
        } catch (err) {
            console.error(err);
            console.log(error)
        }

        // Alert the user their first and last name, clear the inputs
        setSelectedEmployee('');
        setMessage('');
        setMessageLength('');
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    };

    return (
        <div className="card border-dark vw-100">
            <div className="card-body">
                <form className="form m-2">
                    <div className="form-group m-2">
                        <label htmlFor="selectedEmployee">Employee</label>
                        <select
                            className="form-control"
                            value={selectedEmployee}
                            name="selectedEmployee"
                            onChange={handleInputChange}>
                            <option value="" disabled hidden>Select an Employee</option>
                            {/* map all possible employees in a different component using props*/}
                            {employeeData.map(employee => <option key={employee._id} value={employee._id}>{employee.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name="message" value={message} onChange={handleInputChange} rows="3" maxLength="250"></textarea>
                    </div>
                    <div style={countStyle}>
                        <span id="current">{messageLength}</span>
                        <span id="maximum">/ 250</span>
                    </div>
                    <div className="form-group m-2">
                        <button className="form-control btn btn-primary" type="button" onClick={(e) => handleFormSubmit(e)}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MessageForm;
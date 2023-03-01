import React, { useState } from 'react';

// I need this to have a dropdown that displays all the employees

const MessageForm = () => {
    const countStyle = {
        float: "right",
        padding: "0.1rem 0 0 0",
        fontSize: "0.875rem",
    }
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [message, setMessage] = useState('');
    const [messageLength, setMessageLength] = useState(0);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        name === 'selectedEmployee' ? setSelectedEmployee(value) : setMessage(value);

        // This is delayed by one due to deleting text counting towards message.length
        if (name === 'message') {
            setMessageLength(message.length);
        }

        console.log(message)
        console.log(messageLength)
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        console.log(selectedEmployee);
        console.log(message);

        // Alert the user their first and last name, clear the inputs
        setSelectedEmployee('');
        setMessage('');
        setMessageLength('');
    };

    return (
        <div className="border border-dark rounded">
            <form className="form m-2">
                <div className="form-group m-2">
                    <label htmlFor="selectedEmployee">Employee</label>
                    <select
                        className="form-control"
                        value={selectedEmployee}
                        name="selectedEmployee"
                        onChange={handleInputChange}>
                        {/* map all possible employees in a different component using props*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
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
                    <button className="form-control btn btn-primary" type="button" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;
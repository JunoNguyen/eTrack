import React from 'react';
import Messages from '../Messages';

const ManagerMessages = () => {
    // Eventually Convert to utilize Messages component
    const messages = [
        {
            name: "Martin Meyers",
            message: "Please clean up desk space. It is pretty messy. Thanks!"
        },
        {
            name: "Martin Meyers",
            message: "Please clean up desk space. It is pretty messy. Thanks!"
        },
        {
            name: "Martin Meyers",
            message: "Please clean up desk space. It is pretty messy. Thanks!"
        },
        {
            name: "Martin Meyers",
            message: "Please clean up desk space. It is pretty messy. Thanks!"
        }
    ]

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Manager Messages</h4>
                <div className="aligner-wrapper">
                    <div className="absolute center-content">
                        {messages.map((message, index) => <Messages key={index} name={message.name} message={message.message} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMessages;
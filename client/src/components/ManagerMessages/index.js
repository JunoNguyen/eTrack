import React from 'react';
import Messages from '../Messages';

const ManagerMessages = (props) => {

    const messages = props.userData?.messages || [];
    console.log(messages)

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Manager Messages</h4>
                <div className="aligner-wrapper">
                    <div className="absolute center-content">
                        {messages.map((message, index) => <Messages key={index} id={message.senderId} name={message.senderName} message={message.message} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMessages;
import React from 'react';
import Messages from '../Messages';

// import { useMutation } from '@apollo/client';
// import { FIND_EMPLOYEE } from '../../utils/mutations';

const ManagerMessages = (props) => {
    // const [ findEmployee, { error } ] = useMutation(FIND_EMPLOYEE);
    const userData = props.userData

    // const handleFindEmployee = async (event) => {
    //     event.preventDefault();
    //     console.log(event.target)

    //     try {
    //         const { data } = await findEmployee({
    //             variables: { id: event.target.id },
    //         });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    const messages = userData?.messages || [];
    console.log(messages);

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
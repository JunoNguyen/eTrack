import React from 'react';
import { useMutation } from '@apollo/client';
import { FIND_EMPLOYEE } from '../../utils/mutations';

const Messages = (props) => {
    const [ findEmployee, { error } ] = useMutation(FIND_EMPLOYEE);


    const margin = {
        margin: "5px",
    };

    const handleFindEmployee = async (event) => {
        // event.preventDefault();
        console.log(event.target)

        try {
            const { data } = await findEmployee({
                variables: { id: event.target.id },
            });
        } catch (err) {
            console.error(err);
        }
    }
    //Eventually convert to props

    return (
        <div className="preview-item border-bottom" style={margin} handleFindEmployee>
            <div className="preview-thumbnail">
                <div className="preview-icon bg-info">
                    <i className="mdi mdi-clock"></i>
                </div>
            </div>
            <div className="preview-item-content d-sm-flex flex-grow">
                <div className="flex-grow">
                    <h6 className="preview-subject">{props.name}</h6>
                    <p className="text-muted mb-0">{props.message}</p>
                </div>
            </div>
        </div>
    )
};

export default Messages;
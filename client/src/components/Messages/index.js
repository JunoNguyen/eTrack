import React from 'react';

const Messages = (props) => {


    const margin = {
        margin: "5px",
    };

    return (
        <div className="preview-item border-bottom id" style={margin}>
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
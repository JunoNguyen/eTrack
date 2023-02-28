import React from 'react';

const ManagerMessages = () => {
    
    const margin = {
        margin: "5px",
    };
    // Eventually Convert this to use props

    return (
        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Manager Messages</h4>
                            <div className="aligner-wrapper">
                                <div className="absolute center-content">
                                    <div className="preview-item border-bottom" style={margin}>
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-info">
                                                <i className="mdi mdi-clock"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content d-sm-flex flex-grow">
                                            <div className="flex-grow">
                                                <h6 className="preview-subject">Martin M.</h6>
                                                <p className="text-muted mb-0">Please clean up desk space. It is pretty messy. Thanks!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="preview-item border-bottom" style={margin}>
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-info">
                                                <i className="mdi mdi-clock"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content d-sm-flex flex-grow">
                                            <div className="flex-grow">
                                                <h6 className="preview-subject">Tom W.</h6>
                                                <p className="text-muted mb-0">Can you code the header for our website? Thanks.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default ManagerMessages;
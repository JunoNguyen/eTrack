import React from 'react';
import { TodoListComponent } from '../TodoListComponent'
import Timeclock from '../Timeclock';

const Dashboard = () => {

    const margin = {
        marginBottom: "10px",
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-12 col-xl-4 grid-margin stretch-card" style={margin}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Clock In</h4>
                            <Timeclock />
                            {/* FIX TODO LIST */}
                            <div className="preview-item-content d-flex flex-grow">
                                <div className="flex-grow">
                                    <div className="d-flex d-md-block d-xl-flex justify-content-between">
                                        <h6 className="preview-subject">EMPLOYEE NAME</h6>
                                        {/* ADD CLOCK IN AND CLOCK OUT BUTTONS HERE */}
                                    </div>
                                    <p className="text-muted">ADD BUTTON</p>
                                </div>
                            </div>
                            <div className="progress progress-md portfolio-progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-4 grid-margin stretch-card" style={margin}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">To do list</h4>
                            <TodoListComponent />
                            {/* FIX TODO LIST */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                    <div className="card" style={margin}>
                        <div className="card-body">
                            <h4 className="card-title">View Timesheet</h4>
                            <div className="aligner-wrapper">
                                <div className="absolute center-content">
                                    {/* ADD TIMESHEET BUTTON LINK */}
                                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">1200</h5>
                                    <p className="text-small text-muted text-center mb-0">Total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={margin}>
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
                </div>

                <div className="col-md-8 grid-margin stretch-card" style={margin}>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-row justify-content-between">
                                <h4 className="card-title mb-1">Pick up shifts</h4>
                                <p className="text-muted mb-1">Your data status</p>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="preview-list">
                                        <div className="preview-item border-bottom">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-primary">
                                                    <i className="mdi mdi-file-document"></i>
                                                </div>
                                            </div>
                                            {/* RUN A MAP TO POST CURRENT AVAILABLE PICK UP SHIFTS */}
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">9AM TO 5PM</h6>
                                                    <p className="text-muted mb-0">03/22/22</p>
                                                    <button className="btn btn-primary" style={margin}>Pick up</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-item border-bottom">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-success">
                                                    <i className="mdi mdi-cloud-download"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">12PM TO 9PM</h6>
                                                    <p className="text-muted mb-0">03/24/22</p>
                                                    <button className="btn btn-primary" style={margin}>Pick up</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-item border-bottom">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-info">
                                                    <i className="mdi mdi-clock"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">9AM TO 5PM</h6>
                                                    <p className="text-muted mb-0">03/25/22</p>
                                                    <button className="btn btn-primary" style={margin}>Pick up</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
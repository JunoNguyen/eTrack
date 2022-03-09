import React from 'react';
import { TodoListComponent } from '../TodoListComponent'
import Timeclock from '../Timeclock';

const Dashboard = () => {

    const margin5px = {
        marginTop: "10px",
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-12 col-xl-4 grid-margin stretch-card">
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
                <div className="col-md-12 col-xl-4 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">To do list</h4>
                            <TodoListComponent />
                            {/* FIX TODO LIST */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
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
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Manager Messages</h4>
                            <div className="aligner-wrapper">
                                <div className="absolute center-content">
                                    {/* ADD TIMESHEET BUTTON LINK */}
                                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">1200</h5>
                                    <p className="text-small text-muted text-center mb-0">Total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 grid-margin stretch-card">
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
                                                    <h6 className="preview-subject">Admin dashboard design</h6>
                                                    <p className="text-muted mb-0">Broadcast web app mockup</p>
                                                </div>
                                                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">15 minutes ago</p>
                                                    <p className="text-muted mb-0">30 tasks, 5 issues </p>
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
                                                    <h6 className="preview-subject">Wordpress Development</h6>
                                                    <p className="text-muted mb-0">Upload new design</p>
                                                </div>
                                                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">1 hour ago</p>
                                                    <p className="text-muted mb-0">23 tasks, 5 issues </p>
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
                                                    <h6 className="preview-subject">Project meeting</h6>
                                                    <p className="text-muted mb-0">New project discussion</p>
                                                </div>
                                                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">35 minutes ago</p>
                                                    <p className="text-muted mb-0">15 tasks, 2 issues</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-item border-bottom">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-danger">
                                                    <i className="mdi mdi-email-open"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">Broadcast Mail</h6>
                                                    <p className="text-muted mb-0">Sent release details to team</p>
                                                </div>
                                                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">55 minutes ago</p>
                                                    <p className="text-muted mb-0">35 tasks, 7 issues </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-warning">
                                                    <i className="mdi mdi-chart-pie"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content d-sm-flex flex-grow">
                                                <div className="flex-grow">
                                                    <h6 className="preview-subject">UI Design</h6>
                                                    <p className="text-muted mb-0">New application planning</p>
                                                </div>
                                                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                                    <p className="text-muted">50 minutes ago</p>
                                                    <p className="text-muted mb-0">27 tasks, 4 issues </p>
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
import React from "react";
import Shifts from '../Shifts';

const ShiftPickup = () => {
    
    const shifts = [
        {
            date: '03/14/2023',
            times: '12 PM to 9 PM'
        },
        {
            date: '03/17/2023',
            times: '8 AM to 4 PM'
        },
        {
            date: '03/17/2023',
            times: '12 PM to 9 PM'
        },
        {
            date: '03/21/2023',
            times: '10 PM to 6 PM'
        }
    ]

    //Eventually convert to props
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                    <h4 className="card-title mb-1">Pick up shifts</h4>
                    <p className="text-muted mb-1">Your current hours</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="preview-list">
                            {/* <div className="preview-item border-bottom">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-primary">
                                        <i className="mdi mdi-file-document"></i>
                                    </div>
                                </div>
                                RUN A MAP TO POST CURRENT AVAILABLE PICK UP SHIFTS
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
                            </div> */}

                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Times</th>
                                        <th scope="col">Pick Up</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <Shifts /> */}
                                    {shifts.map(shift => <Shifts date={shift.date} times={shift.times}/>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShiftPickup;
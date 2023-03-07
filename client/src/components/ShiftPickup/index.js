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
        <div className="card border-dark">
            <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                    <h4 className="card-title mb-1">Pick up shifts</h4>
                    <p className="text-muted mb-1">Your current hours</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="preview-list">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Times</th>
                                        <th scope="col">Pick Up</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <Shifts /> */}
                                    {shifts.map((shift, index) => <Shifts key={index} date={shift.date} times={shift.times}/>)}
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
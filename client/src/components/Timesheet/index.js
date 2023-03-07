import React from 'react';
import Times from '../Times';
const Timesheet = () => {

    const times = [
        {
            date: '02/28/2023',
            timeIn: '8:02 AM',
            timeOut: '5:30 PM'
        },
        {
            date: '03/1/2023',
            timeIn: '8:04 AM',
            timeOut: '5:25 PM'
        },
        {
            date: '03/02/2023',
            timeIn: '7:55 AM',
            timeOut: '6:00 PM'
        },
    ]
    return (
        <div className="card border-dark">
            <div className="card-body">
                <h4 className="card-title">Timecard</h4>
                <div className="aligner-wrapper">
                    <div className="absolute center-content">
                        <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">1200</h5>
                        <p className="text-small text-muted text-center mb-0">Total</p>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Time In</th>
                            <th scope="col">Time Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {times.map((time, index) => <Times key={index} date={time.date} timeIn={time.timeIn} timeOut={time.timeOut} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Timesheet;


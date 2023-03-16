import React from 'react';
import Times from '../Times';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
const Timesheet = () => {

    const { loading, data } = useQuery(QUERY_ME);

    const timesheetData = data?.me.timesheet || {};
    console.log(timesheetData);
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
                            {/* <th scope="col">Time Out</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {timesheetData.map((time, index) => <Times key={index} date={time.time} action={time.action} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Timesheet;


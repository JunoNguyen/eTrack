import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

// import Auth from '../../utils/auth';

const ScheduledHours = () => {

    const test = {
        width: `${100 / 7}%`,
        aspectRatio: `1 / ${1}`
    }

    const { loading, data } = useQuery(QUERY_ME);
    const employeeData = data?.me || [];

    if (loading) {
        return <h2>LOADING...</h2>;
    };

    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    // need a row for every 5 days

    return (
        <div>
            <div className="row d-flex justify-content-center">
                    <div className="card-body">
                        <h4 className="card-title text-center">Scheduled Hours</h4>
                        <h5 className="text-center">Viewing {employeeData.name}'s hours</h5>
                        <div className="border border-dark d-flex flex-wrap row mx-auto">
                            {month.map((day, index) => <div className="border border-dark col-1" style={test} key={index}>{day}</div>)}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ScheduledHours;
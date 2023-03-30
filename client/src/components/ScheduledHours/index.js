import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

const ScheduledHours = () => {


    const { loading, data } = useQuery(QUERY_ME);
    const employeeData = data?.me || [];

    if (loading) {
        return <h2>LOADING...</h2>;
    };

    return (
        <div className="d-flex justify-content-center">
            LIKELY TO GET SCRAPPED AND REWRITTEN
        </div>
    );
};

export default ScheduledHours;
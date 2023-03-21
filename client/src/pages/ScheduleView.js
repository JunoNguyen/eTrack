import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SCHEDULES } from '../utils/queries';
import Schedule from '../components/Schedule';

export default function BasePage() {
    const { loading, data } = useQuery(QUERY_SCHEDULES);
    const scheduleData = data?.schedules;
    console.log(scheduleData);
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Monday</th>
                        <th scope="col">Tuesday</th>
                        <th scope="col">Wednesday</th>
                        <th scope="col">Thursday</th>
                        <th scope="col">Friday</th>
                        <th scope="col">Saturday</th>
                        <th scope="col">Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduleData.map((schedule, index) => 
                        <Schedule schedule={schedule} key={index}/>
                    )}
                </tbody>
            </table>
        </div>

    )
};
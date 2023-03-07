import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { daysInThisMonth, fillFirstDays, getDayName, getDayNum, getMonth, getMonthName, getYear, isWeekend } from '../../utils/date-helpers';

// import Auth from '../../utils/auth';

const ScheduledHours = () => {

    const dayStyle = {
        width: `${100 / 7}%`,
        aspectRatio: `1 / ${1}`
    }

    const { loading, data } = useQuery(QUERY_ME);
    const employeeData = data?.me || [];

    if (loading) {
        return <h2>LOADING...</h2>;
    };
    let days = [];

    for (let day = 1; day <= daysInThisMonth(1) + 1; day++) {
        const dayName = getDayName(getYear(), getMonth(1), day);
        const weekend = isWeekend(dayName);
        console.log(dayName, weekend, day);
        days.push(
            {
                weekend: weekend,
                day: dayName,
                dayNumber: day - 1,
                year: getYear()
            }
        )
    };
    days.shift();

    fillFirstDays(days);
    console.log(days);
    // need a row for every 5 days
    // I need to make a schema in the employee model for their shift. Every mon-fri should display their shift
    // DRAWBACKS: part time would be hard to code in
    // Manually need to seed the month and days

    return (
        <div className="d-flex justify-content-center">
            <div className="row d-flex justify-content-center" style={{ width: "75%" }}>
                <div className="card-body">
                    <h4 className="card-title text-center">Scheduled Hours</h4>
                    <h5 className="text-center">{getMonthName()}</h5>
                    <div className="border border-dark d-flex flex-wrap row mx-auto">
                        {days.map((day, index) =>
                            <div className="border border-dark col-1" style={dayStyle} key={index}>
                                <h6>{day.day} {day.dayNumber}, {day.year}</h6>
                                <p>8:00 AM - 5:00 PM</p>
                                {((!day.weekend) ? <p>8:00 AM - 5:00 PM</p> : <p>weekend</p>)}
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduledHours;
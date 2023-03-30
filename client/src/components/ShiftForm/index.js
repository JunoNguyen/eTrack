import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getUnix } from '../../utils/date-helpers';

const ShiftForm = () => {


    const [startDate, setStartDate] = useState(
        new Date()
    );
    const [endDate, setEndDate] = useState(
        new Date()
    );


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`Start: ${startDate} || End: ${endDate}`);
        console.log(`UNIX || Start: ${getUnix(startDate)} || End: ${getUnix(endDate)}`);

    }
    return (
        <div className="card border-dark vw-100">
            <div className="card-body">
                <form className="form m-2">
                    <div className="form-group m-2">
                        <label for="startDate">Start Time:</label>
                        <DatePicker
                            name="startDate"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                    <div className="form-group m-2">
                        <label for="endDate">Start Time:</label>
                        <DatePicker
                            name="endDate"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                    <div className="form-group m-2">
                        <button className="form-control btn btn-primary" type="button" onClick={(e) => handleFormSubmit(e)}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShiftForm;
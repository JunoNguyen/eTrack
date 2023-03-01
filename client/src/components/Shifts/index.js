import React from 'react';

const Shifts = (props) => {

    return (
        <tr>
            <th scope="row">{props.date}</th>
            <td>{props.times}</td>
            <td>
                <label htmlFor="" className="form-check-label">
                    <input className="checkbox" type="checkbox"
                    />
                </label>
            </td>
        </tr>
    );
};

export default Shifts;


import React from 'react';

const Times = (props) => {

    return (
                <tr>
                    <th scope="row">{props.date}</th>
                    <td>{props.timeIn}</td>
                    <td>{props.timeOut}</td>
                </tr>
    );
};

export default Times;


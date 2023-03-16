import React from 'react';

const Times = (props) => {
    const date = new Date(props.date);
    return (
                <tr>
                    <th scope="row">{date.toLocaleDateString()}</th>
                    <td>{date.toLocaleTimeString()}</td>
                    <td>{props.action}</td>
                </tr>
    );
};

export default Times;


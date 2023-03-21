import React from 'react';

const Schedule = (props) => {
    console.log(props.schedule)
    let schedule = props.schedule
    
    return (
    <tr>
      <th scope="row">Hours</th>
      <td>{props.schedule.monday}</td>
      <td>{props.schedule.tuesday}</td>
      <td>{props.schedule.wednesday}</td>
      <td>{props.schedule.thursday}</td>
      <td>{props.schedule.friday}</td>
      <td>{props.schedule.saturday}</td>
      <td>{props.schedule.sunday}</td>
    </tr>
    )
};

export default Schedule;
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SHIFTS } from "../utils/queries";

export default function BasePage() {
  const { loading, data } = useQuery(QUERY_SHIFTS);

  const [schedule, setSchedule] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  useEffect(() => {
    const map = () => {
      let schedul = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      };

      const keys = Array.from(Object.keys(schedul));

      data.shifts.forEach((shift) => {
        const startTime = new Date(shift.startTime);
        const day = startTime.getDay();
        schedul[keys[day === 0 ? 6 : day - 1]].push(shift);
      });

      setSchedule(schedul);
    };

    if (data) map();

    console.log(schedule);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {Object.keys(schedule).map((day) => (
              <th key={day} scope="col">
                {day.charAt(0).toLocaleUpperCase() + day.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Object.entries(schedule).map(([day, shifts]) => (
              <td>
                <ul>
                  {shifts.map((shift, idx) => (
                    <li key={`${shift._id}-${idx}`}>
                      <div>
                        {new Date(shift.startTime).toLocaleTimeString()} -{" "}
                        {new Date(shift.endTime).toLocaleTimeString()}
                      </div>
                      <div>{shift.assignedEmployee?.name ?? "Unassigned"}</div>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

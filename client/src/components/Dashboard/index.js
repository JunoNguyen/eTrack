import React from 'react';
import TodoList from '../TodoListComponent'
import Timeclock from '../Timeclock';
import Timesheet from '../Timesheet'
import ManagerMessages from '../ManagerMessages';
import ShiftPickup from '../ShiftPickup';

const Dashboard = () => {

    const margin = {
        margin: "5px",
    };

    return (
        <div>
            <div className="row">
                <div style={margin}>
                    <Timeclock />
                </div>
                <div style={margin}>
                    <TodoList />
                </div>
                <div style={margin}>
                    <Timesheet />
                </div>
                <div style={margin}>
                    <ManagerMessages />
                </div>
                <div style={margin}>
                    <ShiftPickup />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
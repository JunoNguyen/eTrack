import React, { useState, useEffect } from 'react';
import TodoList from '../TodoListComponent'
import Timeclock from '../Timeclock';
import Timesheet from '../Timesheet'
import ManagerMessages from '../ManagerMessages';
import ShiftPickup from '../ShiftPickup';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { SAVE_NOTE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Dashboard = () => {

    const [noteValue, setNoteValue] = useState('');

    const { loading, data } = useQuery(QUERY_ME);
    const [saveNote, { error }] = useMutation(SAVE_NOTE);

    const userData = data?.me || {};
    // const notesData = userData?.savedNotes || [];
    
    const handleSaveNote = async (event) => {
        event.preventDefault();
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveNote({
                variables: { noteData: noteValue },
            });
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        
        setNoteValue(event.target.value)
    }

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
                    <TodoList handleChange={handleChange} handleSaveNote={handleSaveNote} userData={userData} />
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
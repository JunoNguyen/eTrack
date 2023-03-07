import React, { useState } from 'react';
import TodoList from '../TodoListComponent'
import Timeclock from '../Timeclock';
import Timesheet from '../Timesheet'
import ManagerMessages from '../ManagerMessages';
import ShiftPickup from '../ShiftPickup';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { SAVE_NOTE, REMOVE_NOTE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Dashboard = () => {

    const { loading, data } = useQuery(QUERY_ME);
    const [saveNote, { error }] = useMutation(SAVE_NOTE);
    const [removeNote, { secondError }] = useMutation(REMOVE_NOTE);

    const [noteValue, setNoteValue] = useState('');

    const userData = data?.me || {};
    const notesData = userData?.savedNotes || [];

    const handleSaveNote = async (event) => {
        event.preventDefault();
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (noteValue.length === 0) {
            return false;
        };

        if (!token) {
            return false;
        };

        try {
            const { data } = await saveNote({
                variables: { noteData: { note: noteValue } },
            });
            console.log(data);
        } catch (err) {
            console.error(err);
            console.log(error);
        };
    };

    const handleRemoveNote = async (id) => {

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeNote({
                variables: { noteId: id },
            });
            console.log(data);
        } catch (err) {
            console.error(err);
            console.log(secondError);
        }
    };

    const handleChange = (event) => {
        event.preventDefault();

        setNoteValue(event.target.value)
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    };
    // ============================

    const margin = {
        margin: "5px",
        width: "100%"
    };

    return (
            <div className="row d-flex justify-content-center">
                <div style={margin}>
                    <Timeclock />
                </div>
                <div style={margin}>
                    <TodoList handleChange={handleChange} handleSaveNote={handleSaveNote} notesData={notesData} handleRemoveNote={handleRemoveNote}/>
                </div>
                <div style={margin}>
                    <Timesheet />
                </div>
                <div style={margin}>
                    <ManagerMessages userData={userData} />
                </div>
                <div style={margin}>
                    <ShiftPickup />
                </div>
            </div>
    );
}

export default Dashboard;
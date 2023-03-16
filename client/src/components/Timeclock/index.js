import React from 'react';
import Clock from 'react-live-clock';

import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { PUNCH } from '../../utils/mutations';

import Auth from '../../utils/auth'

const Timeclock = (props) => {

    const clockStyle = {
        fontSize: '2rem',
    };

    const marginRight = {
        marginRight: '5px'
    };

    const { loading, data, refetch } = useQuery(QUERY_ME);
    const [punch, { error }] = useMutation(PUNCH);

    const userData = data?.me || {};

    const handlePunch = async (punchType) => {

        try {
            const { data } = await punch({
                variables: { action: punchType },
            });
            refetch();
            console.log(data);
        } catch (err) {
            console.error(err);
            console.log(error);
        };
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <div className="card border-dark">
            <div className="card-body">
                <h4 className="card-title">Time Clock</h4>
                <Clock format={'h:mm:ssa'} style={clockStyle} ticking={true} />
                {/* FIX TODO LIST */}
                <div className="preview-item-content d-flex flex-grow my-2">
                    <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                            {Auth.loggedIn() ? (
                                <>
                                    <h6 className="preview-subject">{userData.name}</h6>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <button className="btn btn-success" style={marginRight} onClick={() => handlePunch('IN')}>Clock In</button>
                            <button className='btn btn-danger' onClick={() => handlePunch('OUT')}>Clock Out</button>
                        </div>
                    </div>
                </div>
                <div className="progress progress-md portfolio-progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
};

export default Timeclock;
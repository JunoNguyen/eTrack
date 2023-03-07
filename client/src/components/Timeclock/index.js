import React from 'react';
import Clock from 'react-live-clock';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth'

const Timeclock = (props) => {
    const { loading, data } = useQuery(QUERY_ME);

    const userData = data?.me || {};
    
    const clockStyle = {
        fontSize: '2rem',
    };

    const marginRight = {
        marginRight: '5px'
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
                            {/* <h6 className="preview-subject">EMPLOYEE NAME</h6> */}
                            {Auth.loggedIn() ? (
                                <>
                                    <h6 className="preview-subject">{userData.name}</h6>
                                </>
                            ) : (
                                <></>
                            )}
                            {/* ADD CLOCK IN AND CLOCK OUT BUTTONS HERE */}
                        </div>
                        {/* <div class> */}
                        <button className="btn btn-success" style={marginRight}>Clock In</button>
                        <button className='btn btn-danger'>Clock Out</button>
                        {/* </div> */}
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
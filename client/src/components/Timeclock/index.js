import React from 'react';
import Clock from 'react-live-clock';

const Timeclock = () => {
    const clockStyle = {
        fontSize: '2rem',
    };

    return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Clock In</h4>
                    <Clock format={'h:mm:ssa'} style={clockStyle} ticking={true} />
                    {/* FIX TODO LIST */}
                    <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                            <div className="d-flex d-md-block d-xl-flex justify-content-between">
                                <h6 className="preview-subject">EMPLOYEE NAME</h6>
                                {/* ADD CLOCK IN AND CLOCK OUT BUTTONS HERE */}
                            </div>
                            <p className="text-muted">ADD BUTTON</p>
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
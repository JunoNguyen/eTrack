import React from 'react';

const Timesheet = () => {

    return (
        // <div className="col-md-12 col-xl-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Timecard</h4>
                    {/* <Clock format={'h:mm:ssa'} style={clockStyle} ticking={true} /> */}
                    {/* FIX TODO LIST */}
                    <div className="aligner-wrapper">
                        <div className="absolute center-content">
                            {/* ADD TIMESHEET BUTTON LINK */}
                            <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">1200</h5>
                            <p className="text-small text-muted text-center mb-0">Total</p>
                        </div>
                    </div>
                    {/* <div className="progress progress-md portfolio-progress"> */}
                        {/* INSERT HOURS HERE */}
                    {/* </div> */}
                </div>
            </div>
        // </div>
    );
};

export default Timesheet;


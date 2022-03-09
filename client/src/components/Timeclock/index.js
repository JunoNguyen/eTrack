import React from 'react';
import Clock from 'react-live-clock';

const Timeclock = () => {
    const clockStyle = {
        fontSize: '2rem',
    };

    return (
        <Clock format={'h:mm:ssa'} style={clockStyle} ticking={true} />
    )
};

export default Timeclock;
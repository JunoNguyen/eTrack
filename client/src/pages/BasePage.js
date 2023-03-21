import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default function BasePage() {

    const [method, setMethod] = useState('login');

    return (
        <div>
            <LoginForm />
        </div>
    )
};
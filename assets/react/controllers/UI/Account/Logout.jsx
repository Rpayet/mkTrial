import React, { useEffect } from 'react';
import axios from 'axios';

export default function Logout() {
    useEffect(() => {
        axios.post('/logout')
    }, []);

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
}



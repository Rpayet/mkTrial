import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tournament from './Layout/Tournament';
import Event from './Layout/Event';
import Navigation from './DashBoard/Navigation';
import Landing from './Layout/Landing';
import Account from './Layout/Account';
import { AppProvider } from './_Provider/AppContext';

export default function Index() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Navigation /> 
                <div className='my-20'>
                    <Routes>
                        <Route index path='/' element={<Landing />} />
                        <Route path='/tournament' element={<Tournament />} />
                        <Route path='/event/:id' element={<Event />} />
                        {/* <Route path='/login' element={<Account />} /> */}
                    </Routes>
                </div>        
            </BrowserRouter>
        </AppProvider>
    )
}

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tournament from './Tournament';
import Event from './Event';
import Navigation from './DashBoard/Navigation';
import Landing from './Layout/Landing';

export default function Index() {
    return (
        <>
            <BrowserRouter>
                <Navigation /> 
                <div className='my-20'>
                    <Routes>
                        <Route index path='/' element={<Landing />} />
                        <Route path='/tournament' element={<Tournament />} />
                        <Route path='/event/:id' element={<Event />} />
                    </Routes>
                </div>        
            </BrowserRouter>
        </>
    )
}

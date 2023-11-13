import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../DashBoard/Navigation";
import Landing from "../Layout/Landing";
import Tournament from "../Layout/Tournament";
import Account from "../Layout/Account";
import Logout from "../UI/Account/Logout";
import { AppContext } from "../_Provider/AppContext";
import { LoadingLogo } from "../UI/Loading/LoadingAssets";

export default function PublicRouter() {

    const { mainLoading } = useContext(AppContext);

    if (mainLoading) {
        return (
            <LoadingLogo />
        )
    }

    return (
        <BrowserRouter>
            <Navigation /> 
            <div className='my-20'>
                <Routes>
                    <Route index path='/' element={<Landing />} />
                    <Route path='/tournament' element={<Tournament />} />
                    <Route path='/event/:id' element={<Event />} />
                    <Route path='/login' element={<Account />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </div>        
        </BrowserRouter>
    )
}
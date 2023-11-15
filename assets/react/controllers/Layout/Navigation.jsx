import React, { useContext } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { AppContext } from '../_Provider/AppContext';
import { IoMdLogOut } from "react-icons/io";
import axios from 'axios';

export default function Navigation() {

    const navigate = useNavigate();
    const { userIdentifier } = useContext(AppContext);

    const logout = () => {
        redirect('/logout');
    }

    const handleLogout = async () => {
        document.cookie = 'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        redirect('/');
    };

    return (
        <header className="max-w-6xl mx-auto bg-shell rounded-b-3xl text-white font-bold">

            <nav className="flex justify-between items-center py-4 mx-20">
                <div className="flex w-2/5 items-center gap-4">
                    <img 
                        src="/assets/admin/img/icons/Logo.png"
                        alt="logo" />
                    <p 
                        className='cursor-pointer'
                        onClick={() => navigate('/')}>Accueil</p>
                    <p 
                        className='cursor-pointer'
                        onClick={() => navigate('/tournament')}>Tournois</p>
                    
                </div>

                <div className="">
                    { userIdentifier 
                        ? (
                            <div className="flex items-center gap-4">
                                    {userIdentifier.picture ? (
                                        <img 
                                            src={`/assets/user/img/${userIdentifier.picture}`}
                                            alt="" 
                                            className="w-10 rounded-full border-solid border-2 border-white" />
                                    ) : (
                                        <img 
                                            src="/assets/admin/img/icons/Default.png"
                                            alt="" 
                                            className="w-10 rounded-full border-solid border-2 border-white" />
                                    )}
                                    
                                
                                <a 
                                    className="block"
                                    href="#">{userIdentifier.name}</a>
                                <IoMdLogOut 
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={handleLogout} />
                            </div>
                        ) : (
                            <div className="">
                                <p 
                                    className='cursor-pointer'
                                    onClick={() => navigate('/login')}>Connexion</p>
                            </div>
                        )

                    }
                        
                        
                </div>

            </nav>
        
        </header>

    )
}
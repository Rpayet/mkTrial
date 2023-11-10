import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../_Provider/AppContext';

export default function Navigation() {

    const navigate = useNavigate();
    const { user } = useContext(AppContext);

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
                        {/* <div className="flex items-center gap-4">
                                <img 
                                src=""
                                alt="" 
                                className="w-10 rounded-full border-solid border-2 border-white" />
                                <img 
                                src="/assets/admin/img/icons/Default.png"
                                alt="" 
                                className="w-10 rounded-full border-solid border-2 border-white" />
                            
                            <a 
                                className="block"
                                href="#">USER</a>
                        </div> */}
                        <div className="">
                            <p 
                                className='cursor-pointer'
                                onClick={() => navigate('/login')}>Connexion</p>
                        </div>
                        
                </div>

            </nav>
        
        </header>

    )
}
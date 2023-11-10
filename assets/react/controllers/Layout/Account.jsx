import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ error, user, lastUsername, csrfToken, onLogout }) {

    const navigate = useNavigate();

    const [email, setEmail] = useState(lastUsername || '');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/login', {
                email,
                password,
                _csrf_token: csrfToken || '',
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="my-20 w-3/5 mx-auto bg-white rounded-lg p-20 flex flex-col gap-y-4">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-3 rounded relative">
                    {error}
                </div>
            )}

            {user && (
                <div className="mb-3">
                    {user.userIdentifier},
                    <button onClick={() => { navigate('/logout')}} className="text-blue-600 hover:underline">
                        Déconnexion
                    </button>
                </div>
            )}

            <label htmlFor="inputEmail" className="block font-medium mb-1">Email</label>
            <input
                type="email"
                value={email}
                name="email"
                id="inputEmail"
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md shadow-sm py-2 px-4 block w-full sm:text-sm border-2"
                autoComplete="email"
                required
                autoFocus
            />

            <label htmlFor="inputPassword" className="block font-medium mb-1">Mot de passe</label>
            <input
                type="password"
                name="password"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md shadow-sm py-2 px-4 block w-full sm:text-sm border-2"
                autoComplete="current-password"
                required
            />

            <input
                type="hidden"
                name="_csrf_token"
                value={csrfToken}
            />

            {/* Comment the below section to remove remember me functionality */}

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" name="_remember_me" /> Se souvenir de moi
                </label>
            </div>


            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                type="button"
                onClick={handleSubmit}
            >
                Connexion
            </button>
        </form>
    );
}

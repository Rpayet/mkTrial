import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import DateSelect from "./DateSelect";

export default function PrimaryOptions ({ setData, data, eventData }) {

    const [speed, setSpeed] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [capacity, setCapacity] = useState(data?.capacity || '');

    const toggleSpeed = () => {

        setSpeed(!speed);

        if (speed === false) {
            setData({ ...data, speed: '200cc' });
        } else {
            setData({ ...data, speed: '150cc' });
        }
    }

    const togglePrivacy = () => {

        setPrivacy(!privacy);
    
        if (privacy == false) {
            setData({ ...data, privacy: true })
        } else {
            setData({ ...data, privacy: false })
        }
    }

    const handleCapacity = (event) => {
    
        setData({...data, capacity: parseInt(event.target.value)});
        setCapacity(event.target.value);
        
    }

    useEffect(() => {
        
        if (data?.speed === '200cc') {
            setSpeed(true);
        }

        if (data?.privacy === true) {
            setPrivacy(true);
        }

    }, [eventData])

    return (
        <div className="flex items-center justify-center gap-10">

            {/* Sélection de la vitesse */}
            <div>
                <span className="block text-xs text-center text-gray-500 font-bold">Vitesse</span>
                <Switch 
                    width={ 40 }
                    height={ 20 }
                    onColor="#EBEBEB"
                    offColor="#EBEBEB"
                    onHandleColor="#efc900"
                    offHandleColor="#02affc"
                    checked={ speed }
                    onChange={ toggleSpeed }
                    handleDiameter={ 30 }
                    uncheckedIcon={ false }
                    checkedIcon={ false }
                    uncheckedHandleIcon={
                        <div className="flex items-center text-xs font-bold text-white p-1.5">150</div>
                        }
                    checkedHandleIcon={
                        <div className="flex items-center text-xs font-bold text-white p-1.5">200</div>
                    } />

            </div>

            {/* Sélection date de fin de l'événement */}
            <DateSelect
                setData= { setData }
                data= { data } />

            {/* Sélection du nombre de participants */}
            <div>
                <span className="block text-xs text-center text-gray-500 font-bold">Places disponibles</span>
                <input 
                    type="number"
                    className="block w-36 mx-auto px-2 py-1 border rounded-lg 
                    cursor-pointer focus:outline-none focus:border-lumi" 
                    placeholder="Sans limite"
                    min={ 3 }
                    value={ capacity }
                    onChange={ handleCapacity }/>

            </div>

            {/* Sélection de la confidentialité de l'événement */}
            <div>
                    
                <span className="block text-xs text-center text-gray-500 font-bold">Visibilité</span>
                <Switch 
                    width={ 40 }
                    height={ 20 }
                    onColor="#EBEBEB"
                    offColor="#EBEBEB"
                    onHandleColor="#9F9F9F"
                    offHandleColor="#9F9F9F"
                    checked={ privacy }
                    onChange={ togglePrivacy }
                    handleDiameter={ 30 }
                    uncheckedIcon={ false }
                    checkedIcon={ false }
                    uncheckedHandleIcon={
                        <div className="flex items-center p-1.5">
                            <svg fill="#000000" width="20px" viewBox="0 0 32 32">
                                <path d="M25 12.034l-14.28 0-0.518-2.321c-0.883-3.293 0.65-6.576 4.159-7.516 3.473-0.93 6.534 
                                1.061 7.432 4.41l0.425 1.686c0.143 0.534 0.691 0.85 
                                1.225 0.707s0.85-0.691 0.707-1.225l-0.425-1.687c-1.187-4.433-5.325-7.045-9.881-5.824-4.574 
                                1.226-6.741 5.607-5.573 9.966l0.402 1.803h-1.673c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 
                                4h18c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM27 28.035c0 1.102-0.898 2-2 2h-18c-1.103 
                                0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18.035c-1.104 0-2 0.895-2 2 0 
                                0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.277c0.595-0.346 1-0.985 1-1.723 
                                0-1.105-0.895-2-2-2z"/>
                            </svg>
                        </div>
                        }
                    checkedHandleIcon={
                        <div className="flex items-center p-1.5">
                            <svg fill="#ff0000" width="20px" viewBox="0 0 32 32">
                                <path d="M25 12h-1v-3.816c0-4.589-3.32-8.184-8.037-8.184-4.736 0-7.963 3.671-7.963 
                                8.184v3.816h-1c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 
                                4-4v-12c0-2.206-1.794-4-4-4zM10 8.184c0-3.409 2.33-6.184 5.963-6.184 3.596 0 
                                6.037 2.716 6.037 6.184v3.816h-12v-3.816zM27 28c0 1.102-0.898 2-2 2h-18c-1.103 
                                0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18c-1.104 
                                0-2 0.895-2 2 0 0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 
                                1-1v-3.277c0.595-0.346 1-0.985 1-1.723 0-1.105-0.895-2-2-2z"/>
                            </svg>
                        </div>
                    } />

            </div>

        </div>
    )
}

// https://www.npmjs.com/package/react-switch
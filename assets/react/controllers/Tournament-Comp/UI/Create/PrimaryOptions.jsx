import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import DateSelect from "./DateSelect";
import { BiSolidLockOpen, BiSolidLock } from 'react-icons/bi';

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
                            <BiSolidLockOpen className="w-4 h-4"/>
                        </div>
                        }
                    checkedHandleIcon={
                        <div className="flex items-center p-1.5">
                            <BiSolidLock className="w-4 h-4 text-mario"/>
                        </div>
                    } />

            </div>

        </div>
    )
}

// https://www.npmjs.com/package/react-switch
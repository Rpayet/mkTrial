import React, { useState } from "react";
import Switch from "react-switch";
import { BiSolidLockOpen, BiSolidLock } from 'react-icons/bi';

export default function PrivacySelect({ data, setData }) {

    const [privacy, setPrivacy] = useState(data?.pinCode ? true : false);

    const handlePrivacy = () => {
        setPrivacy(!privacy);
        if (privacy) {
            setData({ ...data, pinCode: null })
        }
    }

    const handlePinCode = (e) => {
        const value = e.target.value;
        if (value.length <= 6) {
            setData({ ...data, pinCode: parseInt(value) });
        }
    }
        
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                            
                <div className='flex items-center'>
                    <span className="block text-xs text-center text-gray-500 font-bold p-1">Visibilité</span>
                </div>
    
                <div className='flex gap-2'>
                    <Switch 
                        width={ 40 } height={ 20 }
                        onColor="#EBEBEB" offColor="#EBEBEB"
                        onHandleColor="#9F9F9F" offHandleColor="#9F9F9F"
                        checked={ privacy } 
                        onChange={ handlePrivacy }
                        handleDiameter={ 30 }
                        uncheckedIcon={ false } checkedIcon={ false }
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

            { privacy && (
                <div className="flex flex-col gap-2 w-full text-center">
                    <p className='text-xs'>{`${data?.pinCode ? 'Mettre à jour' : 'Définir'} le code d'accès au tournoi`}</p>
                    <input 
                        type="text" 
                        className='rounded-lg m-auto w-1/2 h-6 text-center font-bold bg-gray-200'
                        placeholder='Code à 6 chiffres'
                        onChange={handlePinCode}
                        value={data?.pinCode || ''} />
                </div>
            )}
                
        </>
    )
}



import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { BiSolidLockOpen, BiSolidLock, BiEditAlt } from 'react-icons/bi';

export default function PrivacySelect({ data, setData, event, setModal }) {

    const [privacy, setPrivacy] = useState(data?.privacy || false);
    const [ pinCode, setPinCode ] = useState(data?.pinCode || null);

    useEffect(() => {
        if (data?.privacy === true) {
            setData({...data, pinCode: pinCode});
        } else {
            setData({...data, pinCode: null});
        }
    }, [privacy, pinCode])

    const modalContent = {
        visibility: true,
        title: 'Définir un mot de passe (6 chiffres)',
        content: () => (
            <>
                <p className='text-xs text-center'>Les inscriptions seront disponible uniquement aux utilisateurs possédant ce code.</p>
                <input 
                    type="text" 
                    className='rounded-lg margin-auto w-3/4 h-10 text-center text-2xl font-bold bg-gray-200'
                    placeholder='000000'
                    onChange={(e) => { setPinCode(e.target.value) }}
                    value={pinCode} />
            </>
        ),
        buttons: [
            {
                text: 'Annuler',
                action: () => {
                    setModal((prevModal) => ({ ...prevModal, visibility: false }));
                    if (!data?.pinCode) {
                        setPrivacy(false);
                        setData({ ...data, privacy: false });
                    }
                },
                type: false,
                disabled: false,
            },
            {
                text: 'Valider',
                action: () => {
                    setModal((prevModal) => ({ ...prevModal, visibility: false }));
                    setData({ ...data, privacy: true })
                },
                type: true,
                disabled: false,
            },
        ],
    };

    const handlePinCodeEdit = () => {
        setModal(modalContent);
    }

    const handlePrivacy = () => {
        setPrivacy(!privacy);
        setData({ ...data, privacy: privacy })
        if (!privacy) {
            setModal(modalContent);
        } else if (privacy) {
            setData({ ...data, pinCode: null, privacy: false })
        }
    }
        
    return (
        <div className='flex flex-col items-center justify-center'>
                            
            <div className='flex items-center'>
                { event?.privacy && event?.pinCode &&
                    <BiEditAlt 
                        className='cursor-pointer text-silver hover:text-lumi'
                        onClick={handlePinCodeEdit} /> }
                <span className="block text-xs text-center text-gray-500 font-bold p-1">Visibilité</span>
            </div>

            <Switch 
                width={ 40 }
                height={ 20 }
                onColor="#EBEBEB"
                offColor="#EBEBEB"
                onHandleColor="#9F9F9F"
                offHandleColor="#9F9F9F"
                checked={ privacy }
                onChange={ handlePrivacy }
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

    )
}



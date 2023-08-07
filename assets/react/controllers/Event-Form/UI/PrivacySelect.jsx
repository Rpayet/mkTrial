import React, { useState } from "react";
import Switch from "react-switch";
import { BiSolidLockOpen, BiSolidLock, BiEditAlt } from 'react-icons/bi';

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
        <div className='flex flex-col items-center justify-center'>
                            
            <div className='flex items-center'>
                { data?.pinCode &&
                    <BiEditAlt 
                        className='cursor-pointer text-silver hover:text-lumi'
                        // onClick={} 
                        /> }
                <span className="block text-xs text-center text-gray-500 font-bold p-1">Visibilité</span>
            </div>

            <div className='flex gap-2'>
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

                { privacy && (
                    <input 
                    type="text" 
                    className='rounded-lg margin-auto w-1/3 h-6 text-center font-bold bg-gray-200'
                    placeholder='000000'
                    onChange={handlePinCode}
                    value={data?.pinCode || null} />
                )}

            </div>
        </div>

    )
}



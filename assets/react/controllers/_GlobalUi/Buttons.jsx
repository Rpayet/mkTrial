import React, { useEffect, useState } from "react";
import { BsArrowBarLeft } from 'react-icons/bs';

export function BackButton({ textTitle, onClick }) {

    return (
        <div 
            title={textTitle ? textTitle : ''}
            onClick={onClick}
            className="flex w-fit text-sm rounded-lg bg-white hover:bg-gray-400 border-solid border-2 p-1 cursor-pointer">
            <BsArrowBarLeft className="text-silver w-5 h-5"/>
            <p>Retour</p>
        </div>
    )
}

export function Button({ onClick, text, type, disabled }) {

    const [color1, setColor1] = useState('')

    useEffect(() => {
        if (!type && !disabled) {
            setColor1('mario')
        }  else if (type && !disabled) {
            setColor1('lumi')
        }
    }, [type, disabled]);

    return (

            <button
                disabled = {disabled ? true : false }
                onClick={onClick}
                type="button" 
                className={`block mx-auto w-fit bg-white py-1 px-8 rounded-3xl
                text-lite text-sm text-center border-solid border-[1px] border-lite
                ${ !disabled && `hover:bg-${color1} hover:text-white hover:border-${color1}` }
                disabled:opacity-30`}>
                {text}
            </button>

    )
}
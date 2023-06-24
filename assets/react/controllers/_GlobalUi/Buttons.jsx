import React, { useEffect, useState } from "react";

export function BackButton({ onClick }) {

    return (
        <div 
            onClick={onClick}
            className="flex gap-2 w-fit text-sm rounded-lg bg-white hover:bg-gray-400 border-solid border-2 p-1 cursor-pointer">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" 
                    d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 
                    11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 
                    18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 
                    20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 
                    3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 
                    11.7071 4.29289Z" 
                    fill="#000000"/>
            </svg>
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
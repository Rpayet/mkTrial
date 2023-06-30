import React from "react";
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function ResetScroll() {

    {/* Remonte en haut de page */}

    const resetScrollY = () => {
        window.scrollTo(0,0); 
    }
    
    return (
        <div className="z-50 bg-white rounded-full p-4 fixed 
                    bottom-20 right-10 cursor-pointer animate-bounce
                    border-solid border-2 hover:border-lumi"
            onClick={resetScrollY} >
                <AiOutlineArrowUp />   
        </div>

    )
}
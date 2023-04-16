import React from "react";

export default function FilterToggleButton({ title, setVisibility, visibility }) {

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        
        <div id="cup-opener" 
            className="w-full gap-4 mb-2 hover:text-lumi hover:cursor-pointer"
            onClick={toggleVisibility}>

                <span className="w-full flex items-center border-t-[1px]">
                    {title}
                    {!visibility ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                            <g id="Arrow / Caret_Down_MD">
                                <path id="Vector" d="M16 10L12 14L8 10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <g id="Edit / Remove_Minus">
                                <path id="Vector" d="M6 12H18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                        </svg>
                    )}
                </span>
            
        </div>
    )
} 
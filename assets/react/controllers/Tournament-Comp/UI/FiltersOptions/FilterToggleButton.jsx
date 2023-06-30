import React from "react";
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineMinus } from 'react-icons/ai';

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
                        <IoIosArrowDown />
                    ) : (
                        <AiOutlineMinus/>
                    )}
                </span>
            
        </div>
    )
} 
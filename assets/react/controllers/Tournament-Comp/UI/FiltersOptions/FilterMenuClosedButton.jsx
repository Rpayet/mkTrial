import React, { useEffect, useRef } from "react";

export default function FilterMenuClosedButton({ setVisibility, visibility }) {

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    // const closedRef = useRef(null);

    // const handleClickOutside = event => {
    //     if (closedRef.current && !closedRef.current.contains(event.target)) {
    //         setVisibility(false);
    //     }
    //     console.log(closedRef.current.contains(event.target));
    // };

    // useEffect(() => {
    //     if (visibility) {
    //         document.addEventListener("click", handleClickOutside);
    //     }
    //     return () => {
    //         document.removeEventListener("click", handleClickOutside);
    //     };
    // }, [visibility]);


    return(
        <div 
            // ref={ closedRef }
            id="closedRef" 
            className="flex gap-2 px-2 items-center cursor-pointer"
            onClick={ toggleVisibility }>
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="-2" x2="24.9022" y2="-2" transform="matrix(-0.70795 -0.706262 0.70795 -0.706262 21.7283 19)" stroke="#292929" strokeWidth="4" strokeLinecap="round"/>
                <line x1="2" y1="-2" x2="24.9022" y2="-2" transform="matrix(-0.70795 0.706262 -0.70795 -0.706262 19.7236 0)" stroke="#292929" strokeWidth="4" strokeLinecap="round"/>
            </svg>
            <span>Filtres</span>
        </div>
    )
}
import React from "react";

export default function EntryFomButton({ setToggleView, entryInput, setEntryInput, setImage, setFileName }) {

    const handleCancel = () => {
        setToggleView(true);
        setEntryInput({ ...entryInput, time: 0 });
        setFileName('');
        setImage(null);
    }

    return (

        <div className="flex gap-2 items-center">

            <button
                type="button"
                className="bg-white rounded-full block h-fit
                border-solid border-[1px] border-silver
                hover:bg-mario hover:text-white"
                onClick={handleCancel} >

                    <svg 
                        className="stroke-silver hover:stroke-white p-2" 
                        width="30" 
                        viewBox="0 0 22 21">
                        <line 
                            x1="2" y1="-2" x2="24.9022" y2="-2" 
                            transform="matrix(-0.70795 -0.706262 0.70795 -0.706262 21.7283 19)" 
                            strokeWidth="4" strokeLinecap="round"/>
                        <line 
                            x1="2" y1="-2" x2="24.9022" y2="-2" 
                            transform="matrix(-0.70795 0.706262 -0.70795 -0.706262 19.7236 0)" 
                            strokeWidth="4" strokeLinecap="round"/>
                    </svg>

            </button>
            
            <button
                type="button"
                className="bg-white rounded-full block h-fit
                border-solid border-[1px] border-silver
                hover:bg-lumi hover:text-white">
                    <svg 
                        className="fill-silver hover:fill-white p-2" 
                        width="30" 
                        viewBox="0 0 415.582 415.582" >
                        <g>
                            <path d="M411.47,96.426l-46.319-46.32c-5.482-5.482-14.371-5.482-19.853,0L152.348,243.058l-82.066-82.064   
                            c-5.48-5.482-14.37-5.482-19.851,0l-46.319,46.32c-5.482,5.481-5.482,14.37,0,19.852l138.311,138.31   
                            c2.741,2.742,6.334,4.112,9.926,4.112c3.593,0,7.186-1.37,9.926-4.112L411.47,116.277c2.633-2.632,4.111-6.203,4.111-9.925   
                            C415.582,102.628,414.103,99.059,411.47,96.426z"/>
                        </g>
                    </svg>
            </button>
            
        </div>

    )
}
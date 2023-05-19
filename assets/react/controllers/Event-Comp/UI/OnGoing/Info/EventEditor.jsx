import React from "react";

export default function EventEditor({ setEditor }) {
    
    const handleCancel = () => {
        setEditor(false)
    } 

    return (
        <div className="sm:w-2/3 flex flex-col items-center">
            <h1>Prout</h1>

            <div className="flex gap-4">
                <button
                    onClick={handleCancel}
                    type="button" 
                    className="block mx-auto my-6 w-fit bg-white py-1 px-8 rounded-3xl
                    text-lite text-lg text-center border-solid border-[1px] border-lite
                    hover:bg-mario hover:text-white hover:border-mario
                    transition duration-300 ease-in-out">
                    Annuler
                </button>
                
                <button
                    // onClick={handleSubmit}
                    type="button" 
                    className="block mx-auto my-6 w-fit bg-white py-1 px-8 rounded-3xl
                    text-lite text-lg text-center border-solid border-[1px] border-lite
                    hover:bg-lumi hover:text-white hover:border-lumi
                    transition duration-300 ease-in-out">
                    Accepter
                </button>

            </div>

        </div>
    )
}
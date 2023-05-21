import React from "react";

export default function EditorValidation({ setEditor }) {

    const handleCancel = () => {
        setEditor(false)
    } 

    return (
        <div className="flex gap-4 my-2">
            <button
                onClick={handleCancel}
                type="button" 
                className="block mx-auto w-fit bg-white py-1 px-8 rounded-3xl
                text-lite text-lg text-center border-solid border-[1px] border-lite
                hover:bg-mario hover:text-white hover:border-mario
                transition duration-300 ease-in-out">
                Annuler
            </button>
            
            <button
                // onClick={handleSubmit}
                type="submit" 
                className="block mx-auto w-fit bg-white py-1 px-8 rounded-3xl
                text-lite text-lg text-center border-solid border-[1px] border-lite
                hover:bg-lumi hover:text-white hover:border-lumi
                transition duration-300 ease-in-out">
                Accepter
            </button>

        </div>
    )
}
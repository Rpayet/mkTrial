import React from "react";
import TimerInput from "./TimerInput";
import UploadInput from "./UploadInput";

export default function EntryForm() {
    
    return (
        <form 
            id="entry-form"
            className="bg-white w-full px-2 pt-2 pb-6 flex flex-col gap-y-6 rounded-b-3xl">

            <TimerInput />

            <UploadInput />

            <div className="flex">
                <button
                    type="button" 
                    className="block mx-auto my-6 w-fit bg-white py-1 px-8 rounded-3xl
                    text-lite text-lg text-center border-solid border-[1px] border-lite
                    hover:bg-mario hover:text-white hover:border-mario
                    transition duration-300 ease-in-out">
                    Annuler
                </button>
                
                <button
                    type="button"
                    className="w-1/2 mx-auto inline-block bg-white py-2 sm:py-1 sm:px-2 rounded-lg
                    text-silver text-sm sm:text-lg text-center border-solid border-[1px] border-silver
                    hover:bg-lumi hover:text-white">
                        Valider
                </button>
            </div>

        </form>
    )
}
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
            
            <button
                type="button"
                className="w-1/2 mx-auto inline-block bg-white py-2 sm:py-1 sm:px-2 rounded-lg
                text-silver text-sm sm:text-lg text-center border-solid border-[1px] border-silver
                hover:bg-lumi hover:text-white">
                    Valider
            </button>

        </form>
    )
}
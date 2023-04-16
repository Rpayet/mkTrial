import React from "react";

export default function UploadInput() {

    return (
        
        <div 
            id="form-timer"
            className="flex flex-col mx-auto">

                <label 
                    htmlFor="upload"
                    className="font-bold text-xs text-center text-silver">
                        Capture
                    </label>
                <input 
                    id="upload"
                    type="file"
                    className="flex flex-col text-xs file:mr-4 file:py-2 file:px-4
                    file:border-0 file:text-xs file:font-semibold" />

        </div>

    )
}
import React from "react";

export default function TimerInput() {

    const handleTimer = (e) => {

        const value = e.target.value;

        if (value.length === 1 ) {
            e.target.value += ":";
        } else if (value.length === 4 ) {
            e.target.value += ".";
        } 
    }

    return (
        <div 
            id="form-timer"
            className="flex flex-col w-3/5 mx-auto">

                <label 
                    htmlFor="timer"
                    className="font-bold text-xs text-center text-silver">Temps</label>
                <input 
                    id="timer"
                    type="text"
                    pattern="^[0-9]:[0-5][0-9].[0-9]{1,3}$"
                    placeholder="0:00.000"
                    className="py-1 rounded-lg text-center"
                    onKeyDown={handleTimer} />

        </div>
    )
}
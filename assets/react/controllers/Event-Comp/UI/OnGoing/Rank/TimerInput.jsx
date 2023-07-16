import React from "react";

export default function TimerInput({ entryInput, setEntryInput }) {

    const handleKeyDown = (e) => {

        const { value, selectionStart } = e.target;

        if (e.key === "Backspace" || e.key === "Delete") {
            if (selectionStart === 3 || selectionStart === 6) {
                e.preventDefault();
                e.target.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
                e.target.setSelectionRange(selectionStart - 1, selectionStart - 1);
            }
        } else if (value.length === 1) {
            e.target.value += ":";
            e.target.setSelectionRange(2, 2);
        } else if (value.length === 4) {
            e.target.value += ".";
            e.target.setSelectionRange(5, 5);
        } 
    }

    const handleTime = (event) => {

        if (event.target.value.length == 8) {

            const timeString = event.target.value;
            const [minStr, secMsStr] = timeString.split(":");
            const [secStr, msStr] = secMsStr.split(".");
            const minutes = parseInt(minStr, 10);
            const seconds = parseInt(secStr, 10);
            const milliseconds = parseInt(msStr, 10);
            const totalTimeInMs = (minutes * 60 + seconds) * 1000 + milliseconds;

            setEntryInput({ ...entryInput, time: totalTimeInMs });
        } else {
            setEntryInput({ ...entryInput, time: 0 });
        }
    }

    return (
        <>

                <label 
                    htmlFor="timer"
                    className="font-bold text-xs text-silver">Temps
                </label>

                <input 
                    id="timer"
                    type="text"
                    pattern="^[0-9]:[0-5][0-9].[0-9]{1,3}$"
                    placeholder="0:00.000"
                    className="py-2 rounded-lg"
                    onKeyDown={ handleKeyDown }
                    onChange={ handleTime } />

        </>
    )
}
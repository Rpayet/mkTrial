import React from "react";

export default function FilterResetButton({ setSortList }) {

    const resetClick = () => {
        setSortList({cup: [], race: [], input: '', speed: ''});
    }

    return (
        <div id="buttons-container" className="flex justify-center gap-4">
            <div
                className="inline-block bg-white py-1 px-2 rounded-lg
                text-silver text-lg text-center border-solid border-[1px] border-silver
                hover:bg-mario hover:text-white" 
                type="button"
                onClick={resetClick}>
                Réinitialiser
            </div>
        </div>
    )
}
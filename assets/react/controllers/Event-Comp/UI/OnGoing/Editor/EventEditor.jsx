import React from "react";
import EditorValidation from "./EditorValidation";

export default function EventEditor({ event, setEditor }) {
    
    const handleName = (event) => {
        const newName = event.target.value
    }

    return (
        <div className="sm:w-2/3 flex flex-col items-center">
            
            <h2 className="font-bold">Modifier les informations de l'événement</h2>

            <form>

                <label htmlFor="">Nom</label>
                <input 
                    value={event.name}
                    onChange={handleName}
                    className="rounded" 
                    type="text" />
                <EditorValidation setEditor= { setEditor } />
            </form>


        </div>
    )
}
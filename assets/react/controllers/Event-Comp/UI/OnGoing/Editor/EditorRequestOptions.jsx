import React from "react";
import { Button } from "../../../../_GlobalUi/Buttons";

export default function EditorRequestOptions({ setEditValidation, disabled }) {

    const handleConfirmation= () => {
        setEditValidation(true);
    }

    const handleDeletion = () => {
        
    }

    return (
        <div className="flex gap-4 my-2">

            <Button
                disabled= { disabled } 
                onClick={ handleConfirmation } 
                text= {'Valider les informations'}
                type= { true } /> 

            <Button 
                onClick={ handleDeletion } 
                text= {'Interrompre l\'événement'}
                type= { false } /> 
            
        </div>
    )
}
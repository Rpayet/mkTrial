import React from "react";

export default function AddEntry() {

    return (
        
        <div 
            className="w-full mt-2 py-4 px-10 bg-white flex 
            justify-center rounded-lg cursor-pointer
            hover:border-solid hover:border-[1px] hover:border-lumi">
            <div className="flex gap-2">
                
                <img 
                    src="/assets/admin/img/icons/Add.svg" 
                    alt="add"
                    className="w-6 border-solid border-[1px] border-silver rounded-full"
                        />
                <p>Ajouter une entrée</p>
                
            </div>
            
        </div> 

    )
}
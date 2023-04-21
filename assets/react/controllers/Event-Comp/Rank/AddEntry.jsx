import React, { useEffect, useState } from "react";

export default function AddEntry({ user, entries }) {

    const [inputEntry, setInputEntry] = useState('');

    {/* Hook pour déterminer si l'utilisateur a déjà créer une entrée.  */}
    useEffect(() => {

        const userEntries = entries.filter((entry) => entry.user.id === user.id);

        if ( (userEntries.length > 0) ) {
            setInputEntry('edit');
        } else {
            setInputEntry('new');
        }

    }, [entries, user.id]);

    return (
        
        <div 
            className="w-full mt-2 py-4 px-10 bg-white flex 
            justify-center rounded-lg cursor-pointer
            border-solid border-[1px] hover:border-lumi">
            <div className="flex gap-2">
                
                <img 
                    src="/assets/admin/img/icons/Add.svg" 
                    alt="add"
                    className="w-6 border-solid border-[1px] border-silver rounded-full" />
                <p>Ajouter une entrée</p>
                
            </div>
            
        </div> 

    )
}
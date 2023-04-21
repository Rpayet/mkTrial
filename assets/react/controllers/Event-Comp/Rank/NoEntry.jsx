import React from "react";

export default function NoEntry({ isUserRegistered }) {

    return (
        <>
            {isUserRegistered

                ? <div 
                    className="w-full mt-2 py-4 px-10 flex 
                    justify-center rounded-lg text-center">
                    
                    <p>Aucun temps enregistré. Soyez le premier.</p>
            
                </div> 

                : <div 
                    className="w-full mt-2 py-4 px-10 flex flex-col 
                    items-center justify-center rounded-lg text-center">

                    <p>Aucun temps enregistré.</p>
                    <p>Connectez-vous pour entrer un score au tableau.</p>
                </div>

            }
        </>
    )
}
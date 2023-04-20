import React from "react";

export default function Ranking({ event }) {

    return (
        <div 
            id="rank-container"
            className="w-2/3 flex flex-col items-center">

                { Array.from({length: 1}).map((_, i) => (
                <div className="w-full mt-2 py-4 px-10 bg-white flex justify-between rounded-lg">
                    <div className="flex w-1/3 gap-2">
                        <span>#01</span>
                        <p>{event.user.name}</p>
                    </div>
                    <div>
                        <span className="w-1/3">1:22.333</span>
                    </div>
                </div> 
                )) }
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

        </div>

    )
}
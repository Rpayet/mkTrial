import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "../../../../_Provider/EventContext";
import { rankService } from "../../../_Services/RankService";

export default function AddEntryButton({ setToggleView }) {

    const { eventData, setEventData } = useContext(EventContext);
    const [hideDelay, setHideDelay] = useState('hidden');

    const { entries } = eventData;

    const rankList = rankService(entries);

    console.log(rankList.length);

    const handleToggle = () => {
        setToggleView(false);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
          setHideDelay('');
        }, (rankList.length + 1) * 100);
    
        return () => clearTimeout(timeout);
      }, []);

    return (
        <div 
            className={`w-full mt-2 py-4 px-10 bg-white flex 
            justify-center rounded-lg cursor-pointer
            border-solid border-[1px] hover:border-lumi
            zoomIn ${hideDelay}`}
            onClick={handleToggle}>
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
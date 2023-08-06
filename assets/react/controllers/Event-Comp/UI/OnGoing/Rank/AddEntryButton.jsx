import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "../../../../_Provider/EventContext";
import { rankService } from "../../../_Services/RankService";
import { GrAddCircle } from 'react-icons/gr';

export default function AddEntryButton({ setToggleView }) {

    const { eventData, animation } = useContext(EventContext);
    const [hideDelay, setHideDelay] = useState('hidden');

    const { entries } = eventData;

    const rankList = rankService(entries);

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
            className={`w-full mb-2 py-4 px-10 bg-white flex 
            justify-center rounded-lg cursor-pointer
            border-solid border-[1px] hover:border-lumi
            ${animation.firstAnimation ? hideDelay + ' zoomIn' : 'visible'}`}
            onClick={handleToggle}>
            <div className="flex gap-2">
                
                <GrAddCircle className="w-6 h-6"/>
                <p>Ajouter une entrée</p>
                
            </div>
            
        </div>
    )
}
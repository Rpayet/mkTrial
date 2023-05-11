import React from "react";
import { formatTime } from "../../Services/FormatTime";

export default function BottomList({entry, i}) {

    return (
        <div 
            key={i}
            className="w-1/3 bg-slate-100 p-2 rounded-lg flex items-center gap-4 mb-2 mx-2">

                <p className="w-1/8">#<span className="font-bold">{i+1}</span></p>
    
                <img
                    className="h-10 rounded-full" 
                    src={entry.user.picture ? `/assets/user/img/${entry.user.picture}` : '/assets/admin/img/icons/Default.png'} 
                    alt={entry.user.picture ? `${entry.user.picture}` : 'Default.png'} />

                <p>{formatTime(entry.time)}</p>

        </div>
    )
}
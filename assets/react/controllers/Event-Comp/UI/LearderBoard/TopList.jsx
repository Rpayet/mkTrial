import React from "react";
import { formatTime } from "../../Services/FormatTime";

export default function TopList({entry, i}) {

    if ( i == 0 ) {
        return (

            <div 
                key={i}
                className="absolute -bottom-40 left-1/2 transform -translate-x-1/2
                            p-2 rounded-lg flex flex-col items-center gap-4">
            
                    <div className="relative p-1 rounded-full bg-gradient-to-t from-first-200 to-first-400">
                        <img
                            className="h-28 rounded-full" 
                            src={entry.user.picture ? `/assets/user/img/${entry.user.picture}` : '/assets/admin/img/icons/Default.png'} 
                            alt={entry.user.picture ? `${entry.user.picture}` : 'Default.png'} />
                        <img 
                            className="absolute -bottom-4 transform scale-150"
                            src="/assets/admin/img/icons/First-Icon.png"
                            alt="FirstIcon" />
                    </div>
    
                    <p>{formatTime(entry.time)}</p>
    
            </div>
    
        )
    } else if ( i == 1 ) {
        return (

            <div 
                key={i}
                className="absolute -bottom-28 -left-4
                            p-2 rounded-lg flex flex-col items-center gap-4">
            
                    <div className="relative p-1 rounded-full bg-gradient-to-b from-second-200 to-second-400">
                        <img
                            className="h-20 rounded-full" 
                            src={entry.user.picture ? `/assets/user/img/${entry.user.picture}` : '/assets/admin/img/icons/Default.png'} 
                            alt={entry.user.picture ? `${entry.user.picture}` : 'Default.png'} />
                        <img 
                            className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 scale-125"
                            src="/assets/admin/img/icons/Second-Icon.png"
                            alt="FirstIcon" />
                    </div>
    
                    <p>{formatTime(entry.time)}</p>
    
            </div>
    
        )
    } else if ( i == 2 ) {
        return (

            <div 
                key={i}
                className="absolute -bottom-28 -right-4
                            p-2 rounded-lg flex flex-col items-center gap-4">
            
                    <div className="relative p-1 rounded-full bg-gradient-to-b from-third-200 to-third-400">
                        <img
                            className="h-20 rounded-full" 
                            src={entry.user.picture ? `/assets/user/img/${entry.user.picture}` : '/assets/admin/img/icons/Default.png'} 
                            alt={entry.user.picture ? `${entry.user.picture}` : 'Default.png'} />
                        <img 
                            className="absolute left-1/2 -bottom-6 transform -translate-x-1/2"
                            src="/assets/admin/img/icons/Third-Icon.png"
                            alt="FirstIcon" />
                    </div>
    
                    <p>{formatTime(entry.time)}</p>
    
            </div>
        )
    } 
}
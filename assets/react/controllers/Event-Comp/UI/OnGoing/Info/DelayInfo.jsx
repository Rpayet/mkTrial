import React, { useContext } from "react";
import Countdown from "react-countdown";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { EventContext } from "../../../../_Provider/EventContext";

export default function DelayInfo() {

    const { event, setIsOngoing } = useContext(EventContext);

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span className="text-xs">Terminé</span>;
        } else if (days >= 1) {
            return <span className="text-xs">{days > 1 ? `${days} jours` : `${days} jour`}</span>;
        } else if (days < 1 && hours >= 1) {
            return <span className="text-xs">{hours > 1 ? `${hours} heures` : `${hours} heure`}</span>
        } else if (hours < 1 ) {
            return <span className="text-xs">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
        }
      };

    return (

        <div 
            id="event-options"
            className="" >
                <div className="flex gap-1 items-center">
                    <Countdown 
                        zeroPadTime={2}
                        date= { `${event?.endAt}T${event?.hourEnd || '00:00'}` }
                        daysInHours= {false}
                        renderer= { renderer } />
                    <AiOutlineClockCircle 
                        title="Temps restant"
                        className="w-5 h-5" />
                </div>
        </div>
    )
}
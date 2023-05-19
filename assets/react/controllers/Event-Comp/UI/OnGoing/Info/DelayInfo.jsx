import React from "react";
import Countdown from "react-countdown";

export default function DelayInfo({ event }) {

    const endAtDate = new Date(event.endAt);
    const Completionist = () => <span className="text-xs">Terminé</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />;

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
                <div className="flex gap-2 items-center">
                    <Countdown 
                        zeroPadTime={2}
                        date= { endAtDate }
                        daysInHours= {false}
                        renderer= { renderer } />

                    <img 
                        src="/assets/admin/img/icons/clock.png" 
                        alt="clock"
                        className="h-4" />
                </div>
        </div>
    )
}
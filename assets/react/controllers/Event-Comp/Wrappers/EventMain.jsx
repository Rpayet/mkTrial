import React, { useEffect, useState, useContext } from "react";
import OnGoing from "./OnGoing";
import Finished from "./Finished";
import { EventContext } from "../../_Provider/EventContext";
import { EventService } from "../../_Service/EventService";
import Pincode from "../UI/OnGoing/PinCode/Pincode";
import Closed from "../UI/OnGoing/PinCode/Closed";

export default function EventMain() {
    
    const [isLoading, setIsLoading] = useState(true);

    const { setEventData, eventId, event, entries, isOngoing, setIsOngoing, isLocked, isUserRegistered } = useContext(EventContext);
        
    useEffect(() => {
        if (eventId) {
            const fetchData = async () => {
                try {
                  await EventService().getEvent(eventId, setEventData);
                    setIsLoading(false);
                } catch (error) {
                  setIsLoading(false);
                }
              };
              fetchData();
            }
    }, []);

    
    useEffect(() => {
        // Fonction pour mettre à jour l'état de l'événement en cours
        const checkEventOngoing = () => {
            if (event) {
                const date = event?.endAt + "T" + (event?.hourEnd || "00:00");
                let startTimestamp = new Date(date).getTime();
                let timeLeft = startTimestamp - new Date().getTime();
                setIsOngoing(timeLeft > 0);
            }
        };

        // Vérifier si l'événement est en cours au montage du composant
        checkEventOngoing();

        // Vérifier à intervalle régulier si l'événement est toujours en cours
        const interval = setInterval(checkEventOngoing, 1000);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(interval);
    }, [event]);

    if (isLoading) {
        return (
            <div>
                <img 
                    className="m-auto mt-24 w-44"
                    src="/assets/admin/img/gif/Lakitu---Loading.gif" 
                    alt="Loading" />
            </div>
        )
    }

    if (event && isLocked) {

        if (( event.registered.length !== event.capacity ) && !isUserRegistered){ 
            return (
                <Pincode />
            )
        } else if(( event.registered.length >= event.capacity ) && !isUserRegistered) {
            return (
                <Closed />
            )
        }
    }


    return (
        <>
            { ( event && entries && !isLocked )
                ? ( (isOngoing) 
                    ? ( <OnGoing /> ) 
                    : ( <Finished /> ) ) 
                : ( <div>No data available</div> )
            }
        </>
    );
}

import React, { useEffect, useState, useContext } from "react";
import OnGoing from "../Wrappers/OnGoing";
import Finished from "../Wrappers/Finished";
import { EventContext } from "../../_Provider/EventContext";
import { EventService } from "../../_Service/EventService";
import Pincode from "../UI/OnGoing/PinCode/Pincode";

export default function Main({ id }) {
    
    const [isLoading, setIsLoading] = useState(true);

    const { setEventData, setEventId, event, entries, isOngoing, setIsOngoing, isLocked } = useContext(EventContext);
    
    useEffect(() => {
        setEventId(id);
    }, [id]);
    
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                  await EventService().getEvent(id, setEventData);
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

    // Si l'événement est complet et que l'utilisateur n'est pas inscrit, affichez un message

    if (event && isLocked) {
        return (
            <Pincode />
        )
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

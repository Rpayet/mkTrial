import React, { useEffect, useState, useContext, useRef } from "react";
import OnGoing from "../Wrappers/OnGoing";
import Finished from "../Wrappers/Finished";
import { EventContext } from "../../_Provider/EventContext";
import { EventService } from "../../_Service/EventService";

export default function Main({ id }) {
    
    const [isLoading, setIsLoading] = useState(true);

    const { setEventData, setEventId, event, entries, isOngoing } = useContext(EventContext);
       
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
    
    return (
        <>
            { ( event && entries )
                ? ( (isOngoing) 
                    ? ( <OnGoing /> ) 
                    : ( <Finished /> ) ) 
                : ( <div>No data available</div> )
            }
        </>
    );
}

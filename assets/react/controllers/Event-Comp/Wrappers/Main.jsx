import React, { useEffect, useState, useContext } from "react";
import OnGoing from "../Wrappers/OnGoing";
import Finished from "../Wrappers/Finished";
import { EventContext } from "../../_Provider/EventContext";
import { EventService } from "../../_Service/EventService";

export default function Main({ id }) {

    const date = new Date();
    
    const [isLoading, setIsLoading] = useState(true);
    const { setEventData, setEventId, event, entries, countdown } = useContext(EventContext);
       
    useEffect(() => {
        setEventId(id);
    }, [id]);

    const [isOngoing, setIsOngoing] = useState(true);
    
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
        const isCountdownOngoing = countdown > date;
        if (isCountdownOngoing) {
            const timer = setTimeout(() => {
                setIsOngoing(false);
            }, countdown - date);
            return () => clearTimeout(timer);
        }
    }, [date, countdown]);
    
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
            {(event && entries)
                ? ((isOngoing) 
                    ? (<OnGoing />) 
                    : (<Finished /> )) 
                : (<div>No data available</div>)
            }
        </>
    );
}

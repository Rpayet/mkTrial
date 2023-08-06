import React, { useState } from "react";
import DateSelect from "./DateSelect";
import HourSelect from "./HourSelect";
import PrivacySelect from "./PrivacySelect";
import SpeedSelect from "./SpeedSelect";
import CapacitySelect from "./CapacitySelect";

export default function PrimaryOptions ({ setModal, setData, data, eventData }) {

    const [hour, setHour] = useState(data.hourEnd ? true : false);
    const { event } = eventData ? eventData : '';

    return (
        <>
            <div className="flex flex-wrap items-center justify-center gap-4">

                {/* Sélection de la vitesse */}
                <SpeedSelect 
                    event={event}
                    data={data}
                    setData={setData} />

                {/* Sélection date de fin de l'événement */}
                <DateSelect
                    setHour={setHour}
                    hour={hour}
                    setData= {setData}
                    data= {data} />

                {/* Sélection heure de fin de l'événement */}
                {  hour &&
                    <HourSelect 
                        event={event}
                        setHour={setHour}
                        hour={hour}
                        setData={setData} 
                        data={data} /> }

                {/* Sélection du nombre de participants */}
                <CapacitySelect 
                    event={event}
                    data={data}
                    setData={setData} />

                {/* Sélection de la confidentialité de l'événement */}
                <PrivacySelect 
                    data={data}
                    setData={setData}
                    event={event}
                    setModal={setModal} />

            </div>

            <div>
                { (data?.capacity < event?.registered.length && data?.capacity != null && data?.capacity != '' ) && 
                    <p className="text-xs text-center text-mario font-bold px-4">
                        Le nombre de place disponible ne peut pas être inférieur au nombre de participant inscrit actuellement.
                    </p> }
            </div>
        </>
    )
}

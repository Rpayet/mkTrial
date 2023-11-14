import React, { useContext } from "react";
import EventInfo from "../OnGoing/Info/EventInfo";
import Userinfo from "../OnGoing/Info/UsersInfo";
import EventRegistration from "./EventRegistration";
import { EventContext } from "../../../_Provider/EventContext";
import { getFormattedDate } from "../../../_Service/FormatTime";
import Modal from "../../../_GlobalUi/Modal";

export default function OnGoing() {

    const { animation, isLoading, event, modal } = useContext(EventContext);

    return (
        <div className="relative w-full sm:flex gap-4 p-4">

            { modal.visibility && <Modal />}

            <div className={`relative sm:w-1/3 sm:h-fit bg-white 
                rounded-xl flex sm:flex-col gap-4 p-4 mb-2
                ${animation.firstAnimation && 'zoomIn'} ${isLoading.event && 'shake'}`}>

                <EventInfo />

                <div className='text-sm'>

                    <p>Crée par{" "}
                        <span className='font-bold'>{event.user.name}</span>
                    </p>
                    <p>Démarré le{" "}
                        <span className='font-bold'>{getFormattedDate(event.createdAt)}</span>
                    </p>

                </div>

                <Userinfo />

                { isLoading.event &&

                    <img 
                        className="w-44 absolute -top-44 right-0 z-10 origin-bottom"
                        src="/assets/admin/img/gif/Lakitu---Hammer.gif" 
                        alt="Loading" /> }

            </div>

            <EventRegistration />

        </div>
    )

}
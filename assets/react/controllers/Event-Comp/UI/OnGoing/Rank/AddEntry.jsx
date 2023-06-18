import React, { useState } from "react";
import AddEntryButton from "./AddEntryButton";
import EntryForm from "./EntryForm";
import { EventProvider } from "../../../../_Provider/EventContext";

export default function AddEntry({ event }) {

    const [toggleView, setToggleView] = useState(true);

    return (

        <>
            { toggleView 
                ? <AddEntryButton setToggleView= { setToggleView } />
                : 
                <EventProvider>
                    <EntryForm 
                    event= { event }
                    toggleView= { toggleView }
                    setToggleView= { setToggleView } />
                </EventProvider>
            }
        </>

    )
}
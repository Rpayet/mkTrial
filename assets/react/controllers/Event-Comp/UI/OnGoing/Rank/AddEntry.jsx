import React, { useState } from "react";
import AddEntryButton from "./AddEntryButton";
import EntryForm from "./EntryForm";
import { EventProvider } from "../../../../_Provider/EventContext";

export default function AddEntry() {

    const [toggleView, setToggleView] = useState(true);

    return (

        <>
            { toggleView 
                ? <AddEntryButton setToggleView= { setToggleView } />
                : 
                <EventProvider>
                    <EntryForm 
                        toggleView= { toggleView }
                        setToggleView= { setToggleView } />
                </EventProvider>
            }
        </>

    )
}
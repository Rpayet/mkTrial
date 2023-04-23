import React, { useState } from "react";
import AddEntryButton from "./AddEntryButton";
import EntryForm from "./EntryForm";

export default function AddEntry({ event }) {

    const [toggleView, setToggleView] = useState(true);

    return (

        <>
            { toggleView 
                ? <AddEntryButton setToggleView= { setToggleView } />
                : <EntryForm 
                    event= { event }
                    setToggleView= { setToggleView } />
            }
        </>

    )
}
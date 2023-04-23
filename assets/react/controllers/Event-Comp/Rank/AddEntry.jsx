import React, { useState } from "react";
import AddEntryButton from "./AddEntryButton";
import EntryForm from "./EntryForm";

export default function AddEntry() {

    const [toggleView, setToggleView] = useState(true);

    return (

        <>
            { toggleView 
                ? <AddEntryButton setToggleView= { setToggleView } />
                : <EntryForm setToggleView= { setToggleView } />
            }
        </>

    )
}
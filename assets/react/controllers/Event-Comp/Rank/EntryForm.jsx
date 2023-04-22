import React, { useState } from "react";
import TimerInput from "./TimerInput";
import UploadInput from "./UploadInput";
import EntryFormButton from "./EntryFormButton";
import axios from "axios";

export default function EntryForm({ setToggleView }) {

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');
    
    const [entryInput, setEntryInput] = useState({
        time: 0,
        picture: '',
    });

    console.log(entryInput);

    const handleSubmit = (event) => {
        
        event.preventDefault();
        setErrors({});

        axios
            .post("/api/event/entry/new", entryInput)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });

    }

    return (
        <div
            id="entry-form"
            className="bg-white w-full h-fit flex rounded-lg py-4 justify-around">

            <TimerInput 
                entryInput={ entryInput }
                setEntryInput= { setEntryInput } />

            <UploadInput
                entryInput={ entryInput }
                setEntryInput= { setEntryInput }
                image= { image }
                setImage= { setImage }
                fileName= { fileName }
                setFileName= { setFileName } />

            <EntryFormButton 
                setToggleView= { setToggleView }
                entryInput= { entryInput}
                setEntryInput= { setEntryInput }
                setFileName= { setFileName }
                setImage= { setImage } />

        </div>
    )
}
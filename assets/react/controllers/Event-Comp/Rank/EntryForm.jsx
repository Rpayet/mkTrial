import React, { useState } from "react";
import TimerInput from "./TimerInput";
import UploadInput from "./UploadInput";
import EntryFormButton from "./EntryFormButton";
import axios from "axios";

export default function EntryForm({ event, setToggleView }) {

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');
    
    const [entryInput, setEntryInput] = useState({
        time: null,
        picture: null,
    });

    let formData = new FormData();
    formData.append('time', entryInput.time);
    formData.append('picture', entryInput.picture);

    {/* Requête POST */}
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {

        
        e.preventDefault();

        setErrors({});

        axios
            .post(`/api/event/${event.id}/entry`, formData)
            .then(response => {
                window.location.reload();
            })
            .catch(errors => setErrors(errors.response.data));

    }

    return (
        <form
            onSubmit={handleSubmit}
            id="entry-form"
            className="bg-white w-full h-fit flex rounded-lg py-4 justify-around my-4">

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

        </form>
    )
}
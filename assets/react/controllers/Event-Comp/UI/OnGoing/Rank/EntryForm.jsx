import React, { useState, useContext } from "react";
import TimerInput from "./TimerInput";
import UploadInput from "./UploadInput";
import EntryFormButton from "./EntryFormButton";
import axios from "axios";
import { EventContext } from "../../../../_Provider/EventContext";


export default function EntryForm({ toggleView, setToggleView }) {

    const { eventData, setEventData } = useContext(EventContext);

    const { event } = eventData;

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
                axios.get(`/api/event/${event.id}`)
                .then(response => {
                    setToggleView(false);
                    setEventData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
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
                toggleView= { toggleView }
                setToggleView= { setToggleView }
                entryInput= { entryInput}
                setEntryInput= { setEntryInput }
                setFileName= { setFileName }
                setImage= { setImage } />

        </form>
    )
}
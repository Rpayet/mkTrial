import React, { useState, useContext } from "react";
import TimerInput from "./TimerInput";
import UploadInput from "./UploadInput";
import axios from "axios";
import { EventContext } from "../../../../_Provider/EventContext";
import { RxCross2, RxCheck } from 'react-icons/rx';

export default function EntryForm({ toggleView, setToggleView }) {

    const { eventData, setEventData } = useContext(EventContext);
    const { newEntry, setNewEntry } = useContext(EventContext);

    const { user, event } = eventData;

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');
    
    const [entryInput, setEntryInput] = useState({
        time: null,
        picture: null,
    });

    const handleCancel = () => {
        setToggleView(!toggleView);
        setEntryInput({ ...entryInput, time: 0 });
        setFileName('');
        setImage(null);
    }

    let formData = new FormData();
    formData.append('time', entryInput.time);
    formData.append('picture', entryInput.picture);

    {/* Requête POST */}
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {

        e.preventDefault();

        setErrors({});

        axios
            .post(`/api/event/${event.id}/addEntry`, formData)
            .then(response => {
                setNewEntry({user: user.id, time: entryInput.time, isNew: true})
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
            id="entry-form"
            className="bg-white w-full h-fit flex rounded-lg py-4 justify-around my-4 zoomIn">

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

            <div className="flex gap-2 items-center">
                <RxCross2 
                    title="Annuler"
                    className="w-8 h-8 bg-white rounded-full block
                    border-solid border-[1px] border-silver
                    hover:bg-mario hover:text-white"
                    onClick={handleCancel} />
                <RxCheck
                    title="Valider"
                    className="w-8 h-8 bg-white rounded-full block
                    border-solid border-[1px] border-silver
                    hover:bg-lumi hover:text-white"
                    onClick={handleSubmit} />
            </div>

        </form>
    )
}
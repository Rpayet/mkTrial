import React, { useState, useContext } from "react";
import TimerInput from "./TimerInput";
import UploadInput from "./UploadInput";
import { EventContext } from "../../../../_Provider/EventContext";
import { RxCross2, RxCheck } from 'react-icons/rx';
import { EventService } from "../../../../_Service/EventService";

export default function EntryForm({ toggleView, setToggleView }) {

    const { eventData, setEventData, setNewEntry, isLoading, setIsLoading } = useContext(EventContext);
    const { user, event } = eventData;
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');
    const [filled, setFilled] = useState(0);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setIsLoading(true);
        await EventService().postEntry(event.id, formData, setEventData, 
            setToggleView, setErrors, setFilled, setNewEntry, user, entryInput, setIsLoading);
    }

    return (
        <div className="bg-white w-full py-4 relative rounded-lg overflow-hidden">
            <form
                id="entry-form"
                className="w-full h-fit flex rounded-lg justify-around my-4 zoomIn">

                <div className="flex flex-col w-2/5">
                    <TimerInput 
                        entryInput={ entryInput }
                        setEntryInput= { setEntryInput } />
                    {errors.time && <p className="text-red-500" >{ errors.time }</p>}
                </div>

                <div className="flex flex-col w-2/5">
                    <UploadInput
                        entryInput={ entryInput }
                        setEntryInput= { setEntryInput }
                        image= { image }
                        setImage= { setImage }
                        fileName= { fileName }
                        setFileName= { setFileName } />
                    {errors.picture && <p className="text-red-500" >{ errors.picture }</p>}
                </div>


                <div className="flex gap-2 items-center">
                    <button
                        disabled={isLoading}
                        onClick={handleCancel}>
                        <RxCross2 
                            title="Annuler"
                            className="w-8 h-8 bg-white rounded-full block
                            border-solid border-[1px] border-silver
                            hover:bg-mario hover:text-white"
                            />
                    </button>
                    <button
                        disabled={isLoading}
                        onClick={handleSubmit}>
                        <RxCheck
                            title="Valider"
                            className="w-8 h-8 bg-white rounded-full block
                            border-solid border-[1px] border-silver
                            hover:bg-lumi hover:text-white" />
                    </button>
                </div>

            </form>

            <div 
                style={{height: `${filled}%`}}
                className={`bg-lumi absolute
                bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
            </div>

        </div>
    )
}
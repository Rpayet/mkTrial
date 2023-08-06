import React, { useState, useContext } from "react";
import TimerInput from "./TimerInput";
import UploadInput from "./UploadInput";
import { EventContext } from "../../../../_Provider/EventContext";
import { RxCross2, RxCheck } from 'react-icons/rx';
import { EventService } from "../../../../_Service/EventService";

export default function EntryForm({ toggleView, setToggleView }) {

    const { event, user, setEventData, setNewEntry, isLoading, setIsLoading, filled, setFilled } = useContext(EventContext);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');
    const [entryInput, setEntryInput] = useState({
        time: 0,
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
        setIsLoading({...isLoading, entry: true});
        await EventService().postEntry(event.id, formData, setErrors, setFilled );
        setNewEntry({user: user.id, time: entryInput.time, isNew: true});
        await EventService().getEvent(event.id, setEventData);
        setToggleView(false);
        setFilled(0);
        setIsLoading({...isLoading, entry: false})
        
        if (errors) {
            setIsLoading({...isLoading, entry: false});
        }
    }

    return (
        <div className="bg-white w-full py-2 mb-2 relative rounded-lg overflow-hidden zoomTopIn">
            <form className="w-full h-fit flex rounded-lg justify-around my-4">

                <div className="flex flex-col w-2/5">
                    <TimerInput 
                        entryInput={ entryInput }
                        setEntryInput= { setEntryInput } />
                    {errors.time && <p className="text-red-500 text-xs" >{ errors.time }</p>}
                </div>

                <div className="flex flex-col w-2/5">
                    <UploadInput
                        entryInput={ entryInput }
                        setEntryInput= { setEntryInput }
                        image= { image }
                        setImage= { setImage }
                        fileName= { fileName }
                        setFileName= { setFileName } />
                    {errors.picture && <p className="text-red-500 text-xs" >{ errors.picture }</p>}
                </div>


                <div className="flex gap-2 items-center">
                    <button
                        disabled={isLoading.entry}
                        onClick={handleCancel}>
                        <RxCross2 
                            title="Annuler"
                            className="w-8 h-8 bg-white rounded-full block
                            border-solid border-[1px] border-silver
                            hover:bg-mario hover:text-white"
                            />
                    </button>
                    <button
                        disabled={isLoading.entry}
                        onClick={handleSubmit}>
                        <RxCheck
                            title="Valider"
                            className="w-8 h-8 bg-white rounded-full block
                            border-solid border-[1px] border-silver
                            hover:bg-lumi hover:text-white" />
                    </button>
                </div>

            </form>

            { isLoading.entry &&
                <div 
                    style={{height: `${filled}%`}}
                    className={`bg-lumi absolute
                    bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
                </div>
            }

        </div>
    )
}
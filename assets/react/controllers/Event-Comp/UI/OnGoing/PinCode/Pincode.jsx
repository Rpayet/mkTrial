import React, { useContext, useState } from "react";
import { Button } from "../../../../_GlobalUi/Buttons";
import { EventContext } from "../../../../_Provider/EventContext";
import { EventService } from "../../../../_Service/EventService";

export default function Pincode() {

    const { setIsLocked, event } = useContext(EventContext);
    const eventService = EventService();
    const [code, setCode] = useState('');
    const [ error, setError ] = useState('');

    const handlePinCode = (e) => {
        const value = e.target.value;
        if (value.length <= 6 && value.match(/^[0-9]*$/)) {
            setCode(value);
        }
    }

    const handlePinCodeSubmit = async () => {
        const response = await eventService.checkPin(event.id, code, setError);
        if (response.success) {
            setIsLocked(false);
        }
    }

    return (
        <div className="flex flex-col justify-center gap-2 font-bold text-center bg-white rounded-lg p-2 w-1/2 m-auto">
                <p>Vous souhaitez accéder au tournoi <span className='text-lumi'>{event?.name.toUpperCase()}</span></p>
                <p>Organisé par <span className='text-lumi'>{event?.user.name.toUpperCase()}</span></p>
                <input
                    className='w-1/3 m-auto p-2 border-2 focus:border-lumi rounded-md text-xl bg-slate-200 text-center'
                    onKeyDown={(e) => { if (e.key === 'Enter') { handlePinCodeSubmit() } }}
                    onChange={handlePinCode}
                    value={code || ''}
                    type="text" />
                {error && <p className='text-red-500'>{error.pincode}</p>}
                {error && <p className='text-red-500'>{error.capacity}</p>}
                <div className='flex gap-2 justify-center w-1/2 m-auto'>
                    <Button
                        onClick={handlePinCodeSubmit}
                        type={true}
                        text={'Accéder au tournoi'}
                        disabled={false} />
                </div>
            </div>
    )
}

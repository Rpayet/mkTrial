import React, { useEffect, useState } from "react";
import Switch from "react-switch";

export default function SpeedSelect({ event, data, setData }) {

    const [speed, setSpeed] = useState(false);

    const toggleSpeed = () => {
        setSpeed(!speed);

        if (speed === false) {
            setData({ ...data, speed: '200cc' });
        } else {
            setData({ ...data, speed: '150cc' });
        }
    }

    useEffect(() => {
        if (data?.speed === '200cc') {
            setSpeed(true);
        }
    }, [event])

    return (
        <div className='flex flex-col items-center justify-center'>
            <span className="block text-xs text-center text-gray-500 font-bold p-1">Vitesse</span>
            <Switch 
                width={ 40 }
                height={ 20 }
                onColor="#EBEBEB"
                offColor="#EBEBEB"
                onHandleColor="#efc900"
                offHandleColor="#02affc"
                checked={ speed }
                onChange={ toggleSpeed }
                handleDiameter={ 30 }
                uncheckedIcon={ false }
                checkedIcon={ false }
                uncheckedHandleIcon={
                    <div className="flex items-center text-xs font-bold text-white p-1.5">150</div>
                    }
                checkedHandleIcon={
                    <div className="flex items-center text-xs font-bold text-white p-1.5">200</div>
                } />

        </div>
    )
}
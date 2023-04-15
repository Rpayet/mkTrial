import React, { useState } from "react";
import Switch from "react-switch";

export default function SwitchesSelect ({ data, setData }) {

    const [speed, setSpeed] = useState(false);
    const [privacy, setPrivacy] = useState(false);

    const toggleSpeed = () => {
        setSpeed(!speed);
        if (speed === false) {
            setData({ ...data, speed: '200cc' });
        } else {
            setData({ ...data, speed: '150cc' });
        }
    }

    const togglePrivacy = () => {
        setPrivacy(!privacy);

        if (privacy == false) {
            setData({ ...data, privacy: true })
        } else {
            setData({ ...data, privacy: false })
        }
    }

    return (
        <>
            {/* Sélection de la vitesse */}
            <div className="flex gap-4">

                <span className="hidden sm:block">150CC</span>

                <Switch 
                    onColor="#EBEBEB"
                    offColor="#EBEBEB"
                    onHandleColor="#40C5EC"
                    offHandleColor="#40C5EC"
                    checked={ speed }
                    onChange={ toggleSpeed }
                    uncheckedIcon={
                        <div className="sm:hidden flex items-center text-xs p-1">150</div>
                        }
                    checkedIcon={
                        <div className="sm:hidden flex items-center text-xs p-1">200</div>
                    } />

                <span className="hidden sm:block">200CC</span>

            </div>

            {/* Sélection de la confidentialité de l'événement */}
            <div className="flex gap-4">
                <span className="hidden sm:block">Public</span>
                <Switch 
                    onColor="#EBEBEB"
                    offColor="#EBEBEB"
                    onHandleColor="#40C5EC"
                    offHandleColor="#40C5EC"
                    checked={ privacy }
                    onChange={ togglePrivacy }
                    uncheckedIcon={
                        <div className="sm:hidden flex items-center text-sm text-silver p-1">✔</div>
                        }
                    checkedIcon={
                        <div className="sm:hidden flex items-center text-sm text-silver p-1">✖</div>
                    } />

                <span className="hidden sm:block">Privée</span>
            </div>
        </>
    )
}

// https://www.npmjs.com/package/react-switch
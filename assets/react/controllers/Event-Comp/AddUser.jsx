import React from "react";

export default function AddUser({ setRegistration }) {

    const handleClick = () => {
        setRegistration(true)
    }

    return (
        <img 
            onClick={handleClick}
            src="/assets/admin/img/icons/UserAdd.svg"
            alt="useradd"
            className="h-10 p-1 bg-white cursor-pointer
            border-solid border-[1px] border-silver rounded-full" />
    )
}
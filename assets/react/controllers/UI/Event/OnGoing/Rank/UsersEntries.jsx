import React, { useContext, useState } from "react";
import UserEntry from "./UserEntry";

export default function UsersEntries({ rankList }) {

    return (
        <>
            {rankList.map((entry, i) => (
                <UserEntry 
                    key= { entry.id }
                    rank= { i }
                    entry= { entry } />
            ))}
        </>
    )
}
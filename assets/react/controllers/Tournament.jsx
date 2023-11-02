import React from "react";
import TournamentMain from "./Tournament-Comp/Wrappers/TournamentMain";

export default function Tournament({ races, mode }) {
    
    return (
        <TournamentMain races={races} mode={mode} />
    )
}

import React from "react";
import TournamentMain from "../Tournament-Comp/Wrappers/TournamentMain";
import { TournamentProvider } from "../_Provider/TournamentContext";

export default function Tournament({ races, mode }) {
    
    return (
        <TournamentProvider>
            <TournamentMain races={races} mode={mode} />
        </TournamentProvider>
    )
}

import React from "react";
import TournamentMain from "../Tournament-Comp/Wrappers/TournamentMain";
import { TournamentProvider } from "../_Provider/TournamentContext";

export default function Tournament() {
    
    return (
        <TournamentProvider>
            <TournamentMain />
        </TournamentProvider>
    )
}

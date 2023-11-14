import React from "react";
import TournamentMain from "../UI/Tournaments/TournamentMain";
import { TournamentProvider } from "../_Provider/TournamentContext";

export default function Tournament() {
    
    return (
        <TournamentProvider>
            <TournamentMain />
        </TournamentProvider>
    )
}

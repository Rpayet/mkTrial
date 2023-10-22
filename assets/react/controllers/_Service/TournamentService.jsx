import React from 'react';

export function TournamentService() {

    {/* Requête GET */}
    const getTournament = async (tournamentId, setTournamentData) => {
        try {
            const response = await axios.get(`/api/tournament/${tournamentId}`);
            setTournamentData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    
    const tournamentList = async (setTournaments) => {
        try {
            const response = await axios.get(`/api/tournament/list`);
            setTournaments(response.data);
        } catch (error) {
            console.error(error);
        }
    };
}
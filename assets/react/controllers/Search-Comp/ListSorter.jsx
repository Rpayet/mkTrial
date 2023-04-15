import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import ScrollReset from "./ScrollReset";

export default function ListSorter({ tournaments, sortList }) {

    {/* Scroll Content Control */}
    const [endIndex, setEndIndex] = useState(6);
    const [showScrollReset, setShowScrollReset] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const windowHeight = window.innerHeight; // Taille de la fenêtre de navigation.
            const body = document.body; // Associe l'élément Body.
            const docHeight = body.scrollHeight; // body.scrollHeight = taille totale du document avec les éléments de base visible.
            const windowBottom = windowHeight + window.pageYOffset; // Calcule la taille du scroll totale de la page avec chaque nouveaux éléments.
            if (windowBottom >= docHeight) {
                setEndIndex(prevEndIndex => prevEndIndex + 6);
                setShowScrollReset(true);
            } else if (window.scrollY == 0 ) {
                setEndIndex(6);
                setShowScrollReset(false);
            }
        }
        
        window.addEventListener("scroll", handleScroll); // Ecoute l'évènement scroll sur la fenêtre.
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    {/* Filtres avec les noms des checkboxes "race"/"cup" et le champ input */}
    let filteredTournaments = tournaments;

    {/* Filtre par Utilisateur / Tournois / Date */}

    if (sortList.cup != '' || sortList.race != '' || sortList.input != '' || sortList.speed != '') {
        filteredTournaments = filteredTournaments.filter((tournament) => (
            sortList.cup.includes(tournament.race.cup.name) || 
            sortList.race.includes(tournament.race.name) ||
            sortList.speed.includes(tournament.speed) ||
            sortList.input.toLowerCase().includes(tournament.name.toLowerCase()) ||
            sortList.input.toLowerCase().includes(tournament.user.name.toLowerCase())
        ));
    }

    const [sortBy, setSortBy] = useState("");

    if (sortBy === "asc-Date") {
        filteredTournaments.sort((a, b) => new Date(a.endAt) > new Date(b.endAt));
    } else if (sortBy === "desc-Date") {
        filteredTournaments.sort((a, b) => new Date(a.endAt) < new Date(b.endAt));
    } else if (sortBy === "asc-User") {
        filteredTournaments.sort((a, b) => a.user.name > b.user.name);
    } else if (sortBy === "desc-User") {
        filteredTournaments.sort((a, b) => a.user.name < b.user.name);
    } else if (sortBy === "asc-Event") {
        filteredTournaments.sort((a, b) => a.name > b.name);
    } else if (sortBy === "desc-Event") {
        filteredTournaments.sort((a, b) => a.name < b.name)
    } else {
        filteredTournaments.sort((a, b) => new Date(a.endAt) < new Date(b.endAt));
    }

    const tournamentCards = filteredTournaments.slice(0, endIndex).map((tournament, index) => (
        <EventCard tournament={tournament} index={index} />
    ));

    return (
        <div>
            
            {showScrollReset && <ScrollReset />}

            <div className={`mt-12 ${tournamentCards.length != 0 ? 'block' : 'hidden' }`}>

                <div className="m-8 w-42 flex gap-4 items-center">

                    <label htmlFor="sortSelect">Trier par :</label>
                    <select name="sortBy" id="option-select" className="bg-white p-2 rounded-lg"
                            value={sortBy} onChange={e => setSortBy(e.target.value)} >
                        <option value="asc-Date">Date croissante</option>
                        <option value="desc-Date">Date décroissante</option>
                        <option value="asc-User">Utilisateur croissant</option>
                        <option value="desc-User">Utilisateur décroissant</option>
                        <option value="asc-Event">Tournoi croissant</option>
                        <option value="desc-Event">Tournoi décroissant</option>
                    </select>

                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {tournamentCards}
                </div>

            </div>

            <div className={`p-40 my-6 mx-auto text-center
                            ${tournamentCards.length == 0 ? 'block' : 'hidden' }`}  >
                <h2 className="text-3xl">Aucun tournoi correspondant.</h2>
                <p>Modifiez ou précisez votre recherche.</p>
            </div>

        </div>
    );
}

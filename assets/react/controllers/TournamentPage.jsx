import React, { useState } from "react";
import SearchBar from "./Search-Comp/SearchBar";
import ListSorter from "./Search-Comp/ListSorter";
import EventForm from "./Create-Comp/EventForm";
import axios from "axios";

export default function TournamentPage({ tournaments, races, mode }) {

    const today = new Date();
    const minDate = new Date().toISOString().substring(0, 10);

    {/* Pagination filtre courses */}
    const pageSetup = mode ? mode : 'create';
    const [page, setPage] = useState(pageSetup);

    {/* Nom de l'évènement créé depuis le champ input, envoyé vers le formulaire */}
    const [eventName, setEventName] = useState('');

    {/* Tableau des paramètres de filtres */}
    const [sortList, setSortList] = useState({
        cup: [],
        race: [],
        input: '',
        speed: [],
    });

    {/* Tableau des paramètres à envoyer au formulaire */}
    const [data, setData] = useState({
        name: '',
        endAt: minDate,
        race: '',
        speed: '150cc',
        privacy: false,
    })

    {/* Requête POST */}
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {

        event.preventDefault();

        setErrors({});

        axios
            .post("/api/tournament/create", data)
            .then(response => {
                location = "/event/" + response.data.event.id;
            })
            .catch(errors => setErrors(errors.response.data));
    }

    return (

        <form onSubmit={handleSubmit}> 

            <SearchBar 
                races= { races } 
                page= { page } 
                setPage= { setPage } 
                sortList= { sortList }
                setSortList={ setSortList }
                data= { data }
                setData= { setData }
                eventName= { eventName }
                setEventName= { setEventName } />

            { page === "sort" ? (

                <ListSorter 
                    tournaments={tournaments} 
                    sortList={sortList} />
                ) : (
                <EventForm
                    tournaments={tournaments}
                    races={races}
                    eventName={eventName}
                    data={data}
                    setData={setData}
                    errors={errors}
                    minDate={minDate} />
            )}
        
        </form>
    )
}

// https://axios-http.com/fr/docs/post_example

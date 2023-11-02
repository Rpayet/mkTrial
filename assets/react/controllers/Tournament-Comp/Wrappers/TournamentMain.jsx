import React, { useEffect, useState } from "react";
import SearchBar from "../UI/Search/SearchBar";
import ListSorter from "./ListSorter";
import EventForm from "./EventForm";
import axios from "axios";

export default function Tournament({ races, mode }) {

    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        axios
            .get("/api/tournament/list")
            .then(response => setTournaments(response.data))
            .catch(error => console.error(error));
    }, []);
    
    const [visibility, setVisibility] = useState(false);

    const minDate = new Date().toISOString().substring(0, 10);

    {/* Pagination filtre courses */}
    const pageSetup = mode ? mode : 'sort';
    const [page, setPage] = useState(pageSetup);

    {/* Nom de l'évènement créé depuis le champ input, envoyé vers le formulaire */}
    const [eventName, setEventName] = useState('');

    {/* Tableau des paramètres de filtres */}
    const [sortList, setSortList] = useState({ cup: [], race: [], input: '', speed: [], });

    {/* Tableau des paramètres à envoyer au formulaire */}
    const [data, setData] = useState({
        name: '',
        endAt: minDate,
        hourEnd: null,
        race: '',
        speed: '150cc',
        pinCode: null,
        capacity: null,
    });

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
    };
    
    return (

        <form 
            onSubmit={handleSubmit}> 

            <SearchBar 
                races= { races } 
                page= { page } 
                setPage= { setPage } 
                sortList= { sortList }
                setSortList={ setSortList }
                data= { data }
                setData= { setData }
                eventName= { eventName }
                setEventName= { setEventName }
                visibility= { visibility }
                setVisibility= { setVisibility } />

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

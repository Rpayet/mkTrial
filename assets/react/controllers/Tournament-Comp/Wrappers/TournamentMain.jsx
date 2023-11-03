import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../UI/Search/SearchBar";
import ListSorter from "./ListSorter";
import EventForm from "./EventForm";
import axios from "axios";
import { TournamentContext } from "../../_Provider/TournamentContext";

export default function Tournament({ races, mode }) {

    const {data} = useContext(TournamentContext);
    
    {/* Pagination filtre courses */}
    const pageSetup = mode ? mode : 'sort';
    const [page, setPage] = useState(pageSetup);

    {/* Requête POST */}
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {

        e.preventDefault();

        setErrors({});

        axios
            .post("/api/tournament/create", data)
            .then(response => {
                location = "/event/" + response.data.event.id;
            })
            .catch(errors => setErrors(errors.response.data));
    };
    
    return (

        <form onSubmit={handleSubmit}> 

            <SearchBar races= { races } page= { page } setPage= { setPage } />

            { page === "sort" 
                ? ( <ListSorter /> ) 
                : ( <EventForm races={races} errors={errors} /> )
            }
        
        </form>
    )
}

import React, { useContext, useState } from "react";
import SearchBar from "../UI/Search/SearchBar";
import ListSorter from "./ListSorter";
import EventForm from "./EventForm";
import axios from "axios";
import { TournamentContext } from "../../_Provider/TournamentContext";

export default function Tournament() {

    const {data, page} = useContext(TournamentContext);

    {/* Requête POST */}
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {

        e.preventDefault();

        setErrors({});

        axios
            .post("/api/tournament/create", data)
            .then( response => {location = "/event/" + response.data.event.id} )
            .catch( errors => setErrors(errors.response.data) );
    };
    
    return (

        <form onSubmit={handleSubmit}> 

            <SearchBar />

            { page === "sort" 
                ? ( <ListSorter /> ) 
                : ( <EventForm errors={errors} /> )
            }
        
        </form>
    )
}

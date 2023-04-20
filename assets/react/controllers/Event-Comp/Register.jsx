import axios from "axios";
import React from "react";

export default function Ranking({ event }) {

    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            id: event.id
        };

        axios
            .post("/api/event/register", data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div 
            id="rank-container"
            className="w-2/3 flex flex-col items-center justify-center">
        
        <div
            className="w-1/2 text-center bg-white p-10 rounded-xl">
            <p>Si t'es ok avec les conditions du tournois tape dans tes mains.</p>
            <p className="text-xs text-slate-500">En vrai on peut pas t'empêcher de tricher, mais si tu le fais c'est que t'as rien compris au fun</p>
            <button
                onClick={handleSubmit}
                type="button" 
                className="block mx-auto my-6 w-fit bg-white py-1 px-8 rounded-3xl
                text-lite text-lg text-center border-solid border-[1px] border-lite
                hover:bg-mario hover:text-white hover:border-mario
                transition duration-300 ease-in-out">
                Participer
            </button>
        </div>
                
        
        </div>

    )
}
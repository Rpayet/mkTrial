import React from "react";
import RaceInfo from "../../OnGoing/Info/RaceInfo"
import TopList from "./TopList";
import { rankService } from "../../../_Services/RankService";
import BottomList from "./BottomList";

export default function TimeOver({ event, entries }) {

    const rankList = rankService(entries);

    return(
        <div 
            id="finished"
            className="w-full flex justify-around bg-white rounded-lg gap-2 m-auto">

            <div className="w-1/3 p-4">

                <div className="mb-4">
                    <p className="text-center font-bold">{event.name}</p>
                    <RaceInfo event={ event } />
                </div>
                <div className="text-center px-2">
                    <p>Du <span className="font-bold">{event.createdAt}</span> au <span className="font-bold">{event.endAt}</span></p>
                    <p>Organisé par <span className="font-bold">{event.user.name}</span></p>
                </div>
                                  
            </div> 

            <div className="w-2/3 p-4">

                <div className="relative h-56 text-center">
                    {rankList.map((entry, i) => (
                        <TopList 
                            entry = { entry }
                            i = { i }
                        />
                    ))} 
                </div>

                <div className="flex flex-wrap justify-center">
                    {rankList.map((entry, i) => (
                        <BottomList
                            entry = { entry }
                            i = { i }
                        />
                    ))}
                </div>

            </div>
        </div> 
    )
}
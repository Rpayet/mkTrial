import React from "react";
import RaceInfo from "../../OnGoing/Info/RaceInfo"
import TopList from "./TopList";
import { rankService } from "../../../Services/RankService";
import BottomList from "./BottomList";

export default function TimeOver({ event, entries }) {

    const rankList = rankService(entries);

    return(
        <div className="bg-white rounded-lg py-2 px-16 m-auto">
            <div className="w-1/2 m-auto">
                <p className="text-center font-bold">{event.name}</p>
                <div className="relative m-auto">
                    <RaceInfo event={ event } />
                    {rankList.map((entry, i) => (
                        <TopList 
                            entry = { entry }
                            i = { i }
                        />
                    ))} 
                </div>
                                  
            </div> 
            <div className="w-full mt-40 flex flex-wrap justify-center">
                {rankList.map((entry, i) => (
                    <BottomList
                        entry = { entry }
                        i = { i }
                    />
                ))}
            </div>
        </div> 
    )
}
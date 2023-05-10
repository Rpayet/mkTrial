import React from "react";
import RaceInfo from "../Info/RaceInfo"
import LeaderList from "./LeaderList";
import { rankService } from "../../Services/RankService";

export default function TimeOver({ event, entries }) {

    const rankList = rankService(entries);

    return(
        <div className="bg-white rounded-lg py-2 px-16">
            <div className="relative">
                <RaceInfo event={ event } />
                {rankList.map((entry, i) => (
                    <LeaderList 
                        entry = { entry }
                        i = { i }
                    />
                ))}
                   
            </div> 
        </div> 
    )
}
import React from "react";
import RaceInfo from "../../OnGoing/Info/RaceInfo"
import TopList from "./TopList";
import { rankService } from "../../../_Services/RankService";
import BottomList from "./BottomList";

export default function TimeOver({ event, entries }) {

    const rankList = rankService(entries);

    return(
        <div className="bg-white rounded-lg py-2 m-auto">
            <div className="w-full">
                <div className="flex">
                    <div className="w-1/3 px-10">
                        <p className="text-center font-bold">{event.name}</p>
                        <RaceInfo event={ event } />
                    </div>
                    <div className="relative w-2/3">
                        {rankList.map((entry, i) => (
                            <TopList 
                                entry = { entry }
                                i = { i }
                            />
                        ))} 
                    </div>
                </div>
                                  
            </div> 
            <div className="w-full mt-6 flex">
                <div className="w-1/3 text-center">
                    <p>Recap</p>
                </div>
                <div className="w-2/3 flex flex-wrap justify-center">
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
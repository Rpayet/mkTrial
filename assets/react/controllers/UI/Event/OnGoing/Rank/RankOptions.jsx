import React, { useContext } from "react";
import NoEntry from "./NoEntry";
import UsersEntries from "./UsersEntries";
import { rankService } from "../../../../_Service/RankService";
import { EventContext } from "../../../../_Provider/EventContext";

export default function RankOptions() {

    const { entries } = useContext(EventContext);
    const rankList = rankService(entries);

    return (
        <>
            {rankList.length > 0 
            
                ? <UsersEntries rankList= { rankList } />

                : <NoEntry />
            }
        </>
    );
}

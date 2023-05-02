import React from "react";
import RaceInfo from "../Info/RaceInfo"

export default function TimeOver({ event, entries }) {

    return(
        <div className="bg-white rounded-lg">
            <div className="relative">
                <RaceInfo event={ event } />
                <div>
                    <div>
                        <img // Rank Section Services
                            className="w-20"
                            src={entries[0].user.picture ? `/assets/user/img/${entries[0].user.picture}` : '/assets/admin/img/icons/Default.jpg'} 
                            alt="firstUser" />
                        <img src="" alt="firstIcon" /> 
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>     
            </div> 
        </div> 
    )
}
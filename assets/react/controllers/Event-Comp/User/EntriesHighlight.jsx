import React from "react";
import { formatTime, formatDate } from "../../_Functions/FormatTime";
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';


export default function EntriesHighlight({ event, showUserEntries }) {

    const formatter = buildFormatter(frenchStrings)

    return (
        <div className="sm:w-2/3 flex flex-col">

            <p 
                className="w-fit text-sm cursor-pointer rounded-lg 
                border-solid border-y-2 p-1 border-lumi hover:border-mario">
                Retour
            </p>

            <div className="w-full flex justify-around p-6">

                <div className="flex items-center gap-4">
                    <img
                        src="/assets/admin/img/icons/Default.png"
                        alt="default"
                        className="h-24 rounded-full border-solid border-4 border-white"
                    />
                    <div>
                        <a 
                            href="#"
                            className="font-bold text-lg hover:text-lumi">
                                { showUserEntries[0].user.name }
                        </a>
                        <p className="text-lg" >{ formatTime(showUserEntries[0].time) }</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-24">
                    <p>kekchoz</p>
                </div>

            </div>

            <div className="w-full text-center">

                <h2 className="my-4">Liste des entrées</h2>

                <div className="w-full">

                    <ul className="grid grid-cols-2 gap-4">
                        { showUserEntries.map((entry, i) => (
                            <li 
                                className="bg-white p-1 rounded-lg 
                                        flex items-center justify-around
                                        hover:scale-[1.02]">
                                    <p>{ formatTime(entry.time) }</p>
                                    <TimeAgo date={entry.createdAt} formatter={formatter} />
                                    
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

// https://www.npmjs.com/package/react-timeago
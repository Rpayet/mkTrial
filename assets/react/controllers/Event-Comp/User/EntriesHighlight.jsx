import React from "react";

export default function EntriesHighlight({ event }) {

    return (
        <div className="sm:w-2/3 flex flex-col">

            <p className="cursor-pointer">Retour</p>

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
                                User_Name
                        </a>
                        <p className="text-lg" >1:30.132</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-24">
                    <p>kekchoz</p>
                </div>

            </div>

            <div className="w-full text-center">
                <h2 className="my-4">Liste des entrées</h2>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="bg-white p-2 flex items-center justify-around  rounded-lg">
                        <p>1:33.280</p>
                        <p className="text-xs">Il y a 3 jours</p>
                    </div>
                    <div className="bg-white p-2 flex items-center justify-around  rounded-lg">
                        <p>1:33.280</p>
                        <p className="text-xs">Il y a 3 jours</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
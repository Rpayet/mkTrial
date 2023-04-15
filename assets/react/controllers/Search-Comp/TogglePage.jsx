import React from "react";

export default function TogglePage( {page, setPage} ) {
    

    return(
        <div className="flex gap-2">

            <button
                type="button"
                onClick={ () => setPage('sort') }
                >
                <svg className={`w-8 h-8 ${page == 'sort' ? 'stroke-lumi' : 'stroke-silver'} hover:stroke-lumi`}
                    width="800px" 
                    height="800px" 
                    viewBox="0 0 24 24" 
                    fill="none">
                    <g id="Interface / Search_Magnifying_Glass">
                    <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                    </g>
                </svg>
            </button>

            <button
                type="button"
                onClick={ () => setPage('create') }
                >
                <svg className={`w-8 h-8 ${page == 'create' ? 'stroke-lumi' : 'stroke-silver'} hover:stroke-lumi`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="800px" 
                    height="800px" 
                    viewBox="0 0 24 24" 
                    fill="none">
                    <g id="Edit / Add_Plus">
                    <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                    </g>
                </svg>
            </button>

        </div>
    )
}
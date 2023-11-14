import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import RaceRandomizer from "../../UI/Tournaments/Create/RaceRandomizer";
import { AppContext } from "../../_Provider/AppContext";


export default function CupSelect({ cupSelection, setCupSelection, currentPage, setCurrentPage, setRaceSelection }) {

    const { races } = useContext(AppContext);

    const cups = races.filter((race, index) => index % 4 === 0).map((race) => race.cup);
    
    const cupsPerPage = 12;
    const pageCount = Math.ceil(cups.length / cupsPerPage);

    const offset = currentPage * cupsPerPage;
    let cupList = cups.slice(offset, offset + cupsPerPage);

    // Fonction pour gérer le changement de page
    const handlePageClick = (data) => {

        const selectedPage = data.selected; 
        const previousPage = currentPage - 1;
        const nextPage = currentPage + 1;
        
        if (selectedPage === data.previousLabel) {
        setCurrentPage(previousPage);
        } else if (selectedPage === data.nextLabel) {
        setCurrentPage(nextPage);
        } else {
        setCurrentPage(selectedPage);
        }
    }

    const handleSelect = (event) => {
        setCupSelection(parseInt(event.target.id));
    };

    return (
        <div>
            <div>
                <ReactPaginate
                        pageCount={pageCount}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={1}
                        previousLabel="<"
                        nextLabel=">"
                        breakLabel="/"
                        containerClassName="flex justify-center gap-4"
                        pageLinkClassName=""
                        activeClassName="font-bold text-lumi border-solid border-b-2 border-lumi"
                        onPageChange={handlePageClick}
                        forcePage={currentPage}
                    />
            </div>
            
            <div className="relative">
                <div 
                    className="grid grid-cols-6 sm:gap-4">
                    {cupList.map((cup, index) => (
                        <img
                        id={cup.id}
                        className={ `w-32 sm:w-38 p-2 rounded-full cursor-pointer
                                    ${ cupSelection === cup.id ? 'bg-lumi' : '' }` }
                        key={ index }
                        src={ `/assets/admin/img/cups/${ cup.picture }` }
                        alt={`${ cup.name }`}
                        onClick={ handleSelect }
                        />
                    ))}
                </div>

                {/* Randomizer de course */}
                <RaceRandomizer
                        setCupSelection= { setCupSelection } 
                        setRaceSelection= { setRaceSelection } />

            </div>
        </div>
    )
}
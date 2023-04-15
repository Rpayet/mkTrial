import React, { useState } from 'react';
import FilterToggleButton from './FilterToggleButton';
import ReactPaginate from 'react-paginate';

export default function  CupFilter({ races, setSortList, sortList }) {

    const [visibility, setVisibility] = useState(false);
    const cups = races.filter((race, index) => index % 4 === 0).map((race) => race.cup);

    const [currentPage, setCurrentPage] = useState(0);
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

    const handleInputChange = (event) => {
        
        const { name, checked } = event.target;

        if (checked) {
            setSortList({...sortList, cup: [...sortList.cup, event.target.name], });
        } else {
            setSortList({...sortList, cup: sortList.cup.filter((item) => item !== name), });
        }
    };

    return(
        <div>

            { <FilterToggleButton title="Coupes" setVisibility={setVisibility} visibility={visibility}/> }

            {visibility && (

                <div id="cup-selector" className="grid grid-cols-6 gap-4">

                    {cupList.map((cup, index) => (

                        <div key={index} className="flex">   
                            <input 
                                type="checkbox" 
                                name={`${cup.name}`}
                                id={`cup-${index}`}
                                value={ cup.picture.substring(0, cup.picture.indexOf("_"))}
                                checked={sortList.cup.includes(cup.name)} // Vérifie le tableau pour coché/décoché les cases
                                onChange={handleInputChange} // Ajoute les check au tableau des coupes sélectionnés
                            />
                                
                            <label htmlFor={`cup-${index}`}>
                                <img src={`/assets/admin/img/cups/${ cup.picture }`} alt={ cup.picture } />
                            </label>

                        </div>
                    ))}

                </div>
            )}

            {visibility && (
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="/"
                    containerClassName="flex justify-center gap-4 mt-2"
                    pageLinkClassName=""
                    activeClassName="text-lumi border-solid border-b-2 border-lumi"
                    onPageChange={handlePageClick}
                    forcePage={currentPage}
                />
            )}

        </div>
    )
}
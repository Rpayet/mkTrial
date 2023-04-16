import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import FilterToggleButton from './FilterToggleButton';

export default function RaceFilter({ races, setSortList, sortList }) {

  const [visibility, setVisibility] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const racesPerPage = 16;
  const pageCount = Math.ceil(races.length / racesPerPage); // En cas d'ajout des DLC
  
  const offset = currentPage * racesPerPage;
  let raceList = races.slice(offset, offset + racesPerPage); 

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

  // Split les courses par groupe de 4 (1 groupe par coupe)
  const raceListGroup = [];
  for (let i = 0; i< raceList.length; i += 4) {
    raceListGroup.push(raceList.slice(i, i + 4));
  }

  // Fonction pour gérer les cases cochés
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    // Si la case est coché, ajout au tableau.
    if (checked) {
      setSortList({...sortList, race: [...sortList.race, event.target.name], });
    } else {
      setSortList({...sortList, race: sortList.race.filter((item) => item !== name), });
 
    }
  }

  return (
    <div >

      { <FilterToggleButton title="Courses" setVisibility={setVisibility} visibility={visibility}/> }

      {visibility && (

        <div className="grid grid-cols-2 w-full gap-4">

          {raceListGroup.map((group, index) => (
            <div key={`group-${index}`} className="text-xs mt-2">
              {group.map((race, i) => (  
                <div key={`race-${index}-${i}`} className='flex gap-2'>
                  <input 
                    type="checkbox" 
                    name={`${race.name}`} 
                    id={`race-${index}-${i}`}
                    value={race.name}
                    checked={sortList.race.includes(race.name)} // Vérifie le tableau pour coché/décoché les cases
                    onChange={handleInputChange} // Ajoute les check au tableau des courses sélectionnés
                  />
                  <label htmlFor={`race-${index}-${i}`}>{race.name.toUpperCase()}</label>
                </div>
              ))}
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
            activeClassName="text-lumi font-bold border-solid border-b-2 border-lumi"
            onPageChange={handlePageClick}
            forcePage={currentPage}
          />
      )}

    </div>
  )
}


// Ressource : https://openbase.com/js/react-paginate


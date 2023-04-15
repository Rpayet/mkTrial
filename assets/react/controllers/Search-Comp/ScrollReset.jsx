import React from "react";

export default function ResetScroll() {

    {/* Remonte en haut de page */}

    const resetScrollY = () => {
        window.scrollTo(0,0); 
    }
    
    return (
        <div className="bg-white rounded-full p-4 fixed 
                    bottom-20 right-10 cursor-pointer animate-bounce
                    border-solid border-2 hover:border-buttonHoverStroke"
            onClick={resetScrollY} >

            <svg width="15px" height="15px" viewBox="0 0 20 20" version="1.1">

                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -6599.000000)" fill="#40C5EC">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path d="M12.2196294,6439.93971 L4.29200724,6447.88042 C3.90266425,6448.2704 
                                3.90266425,6448.90338 4.29200724,6449.29436 L4.29200724,6449.29436 C4.68234854,6449.68435 
                                5.31428215,6449.68435 5.70462345,6449.29436 L12.1337743,6442.85361 C12.4482436,6442.53862 
                                12.9853372,6442.76161 12.9853372,6443.20759 L12.9853372,6458.00004 C12.9853372,6458.55202 
                                13.440569,6459 13.9926374,6459 L13.9956324,6459 C14.5477008,6459 14.9819679,6458.55202 
                                14.9819679,6458.00004 L14.9819679,6443.20759 C14.9819679,6442.76161 15.5200599,6442.53862 
                                15.8345292,6442.85361 L22.2956261,6449.32536 C22.6849691,6449.71635 23.317901,6449.71635 
                                23.707244,6449.32536 L23.707244,6449.32536 C24.0975853,6448.93538 24.0975853,6448.3014 
                                23.707244,6447.91142 L15.3962688,6439.58573 L15.3962688,6439.58573 C14.6165845,6438.80476 
                                13.3527173,6438.80476 12.573033,6439.58573 L12.2196294,6439.93971 Z" id="arrow_up-[#362]">
                                </path>
                            </g>
                        </g>
                    </g>
            </svg>      
        </div>

    )
}